# flowroute-numbers-nodejs

## What is it?

Flowroute-numbers-nodejs is a NodeJS SDK that provides methods for interacting with [Flowroute's](https://www.flowroute.com) v1 API. These methods can be used to accomplish the following:

* Search for purchasable phone numbers
* Purchase phone numbers
* View your owned phone numbers and their related details
* Create new inbound routes
* Update the primary and failover route on a phone number

## Documentation 
The full documentation for Flowroute's v1 API is available at [Developer.flowroute.com](https://developer.flowroute.com/).

## How To Install 

The SDK relies on node package manager (npm) being available to resolve dependencies.
Once published you will need to copy the folder 'flowroutenumberslib' into your 'node_modules' folder.

  
## How To Get Setup

The following shows how to import the SDK and setup a basic callback function for processing API responses.

1) Import the SDK module:

        var flowroute = require('flowroutenumberslib');
        
> Depending on where in your file system lowroutebumberslib is, you may need to specify the full file path to flowroutebnumberslib.   
   
2) Configure your API Username and Password from [Flowroute Manager](https://manage.flowroute.com/accounts/preferences/beta/).
 > If you do not have an API Key contact support@flowroute.com:

        flowroute.configuration.username = "AccessKey";
		flowroute.configuration.password = "SecretKey";
		
3) Setup a function to handle both error and success Responses:

	var cb =  function(err, response){
		if(err){
		console.log(err);
		}
		console.log(response);
	};

> In this example we are just outputting the responses to the console. However, this is where you would place your application logic for handling the API responses

## List of Methods and Example Uses

### PurchasablePhoneNumbersController

The Purchasable Phone Numbers Controller contains all of the methods neccesary to search through Flowroute's phone number inventory. 

#### listAvailableNPAs : function(limit, callback)

The listAvailableNPAs method allows you to retrieve a list of every NPA (area code) available in Flowroute's phone number inventory.

| Parameter | Required | Usage                                 |
|-----------|----------|---------------------------------------|
| limit     | False    | Controls the number of items returned (Max 200) |

##### Example Usage

	flowroute.PurchasablePhoneNumbersController.listAvailableNPAs(10,cb)


#### listAreaAndExchange : function(limit, npa, page, callback)

The listAreaAndExchange method allows you to retrieve a list of every NPA-NXX (area code and exchange) available in Flowroute's phone number inventory.

| Parameter | Required | Usage                                                         |
|-----------|----------|---------------------------------------------------------------|
| limit     | False    | Controls the number of items returned (Max 200)                         |
| npa       | False    | Limits results to the specified NPA (also known as area code) |
| page      | False    | Determines which page of the results is returned              |

##### Example Usage
	flowroute.PurchasablePhoneNumbersController.listAreaAndExchange(10,206,1,cb)
	
#### search : function(limit, npa, nxx, page, ratecenter, state, tn, callback)

The search method is the most robust option for searching through Flowroute's purchasable phone number inventory. It allows you to search by NPA, NXX, Ratecenter, State, and TN.

| Parameter  | Required                       | Usage                                                                     |
|------------|--------------------------------|---------------------------------------------------------------------------|
| limit      | False                          | Controls the number of items returned (Max 200)                                     |
| npa        | False, unless nxx is present   | Limits results to the specified NPA (also known as area code)             |
| nxx        | False                          | Limits results to the specified NXX (also known as exchange)              |
| page       | False                          | Determines which page of the results is returned                          |
| ratecenter | False                          | Limits results to the specified ratecenter                                |
| state      | False, unless state is present | Limits results to the specified state                                     |
| tn         | False                          | Limits results to the specified telephone number (supports prefix search) |

##### Example Usage

	flowroute.PurchasablePhoneNumbersController.search(1,206,420,1,"SEATTLE","WA",null,cb)
	
### TelephoneNumbersController

The Telephone Numbers Controller contains all of the methods neccesary to purchase a new phone number and to manage your owned phone number inventory.

#### purchase : function(billing, number, callback)	
The purchase method is used to purchase a telephone number from Flowroute's inventory.

| Parameter       | Required | Usage                                                                                |
|-----------------|----------|--------------------------------------------------------------------------------------|
| billing         | True     | A JSON object that specifies which billing method to use. Either "METERED" or "VPRI" |
| telephoneNumber | True     | The telephone number that you would like to purchase                                 |
	
##### Example Usage
	var billingMethod = {"billing_method" :"METERED"};
	flowroute.TelephoneNumbersController.purchase(billingMethod,13132142029, cb)

#### listAccountTelephoneNumbers : function(limit, page, pattern, callback)

The listAccountTelephoneNumbers method is used to retrieve a list of all of the phone numbers on your Flowroute account.

| Parameter | Required | Usage                                                     |
|-----------|----------|-----------------------------------------------------------|
| limit     | False    | Controls the number of items returned (Max 200)           |
| page      | False    | Determines which page of the results is returned          |
| pattern   | False    | A telephone number to search for (supports prefix search) |

##### Example Usage
	flowroute.TelephoneNumbersController.listAccountTelephoneNumbers(20,1,12064,cb)

#### telephoneNumberDetails : function(telephoneNumber, callback)

The telephoneNumberDetails method is used to retrieve the billing method, primary route, and failover route for the specified telephone number. 

| Parameter       | Required | Usage                                             |
|-----------------|----------|---------------------------------------------------|
| telephoneNumber | True     | The telephone number that you would like to query |

##### Example Usage
	flowroute.TelephoneNumbersController.telephoneNumberDetails("12064205780", cb)

#### update : function(number, routes, callback)

The update method is used to update both the primary and failover route for a phone number. Both the primary and failover route must be specified inside of an array (see Example Usage). The first route name specified will be assigned as the primary route and the second route name specified will be assigned as the failover route. The list of available route names can be retrieved by using the list method in the InboundRoutesController.

| Parameter       | Required | Usage                                                                  |
|-----------------|----------|------------------------------------------------------------------------|
| telephoneNumber | True     | The telephone number that you would like to update routes for          |
| routes          | True     | The names of the primary and failover routes for the phone number (must be an array) |

##### Example Usage

	var routes = [{"name": "c8dee26b0ce87fdf678899df52cc302g"}, {"name": "sip-reg"}];
	flowroute.TelephoneNumbersController.update(12064205780,routes,cb);

### InboundRoutesController

The Inbound Routes Controller contains the methods required to view all of your existing inbound routes and to create new inbound routes.

#### list : function(limit, page, callback)

The list method is used to return all of the existing inbound routes from your Flowroute account.

| Parameter | Required | Usage                                            |
|-----------|----------|--------------------------------------------------|
| limit     | False    | Controls the number of items returned (Max 200)  |
| page      | False    | Determines which page of the results is returned |

##### Example Usage

	flowroute.InboundRoutesController.list(10,1,cb);
	
#### createNewRoute : function(routeName, type, value, callback)

The createNewRoute method is used to create a new inbound route.

| Parameter | Required | Usage                                                                                   |
|-----------|----------|-----------------------------------------------------------------------------------------|
| routeName | True     | The name you would like to assign to the new route (supports alphanumeric characters)   |
| type      | True     | The type of route you would like to create. Valid options are "HOST", "PSTN", and "URI" |
| value     | True     | The actual route that you would like to create                                          |

##### Example Usage

	flowroute.InboundRoutesController.createNewRoute('PSTNroute1','PSTN','18002364455',cb)
	flowroute.InboundRoutesController.createNewRoute('Hostroute1','HOST','24.239.23.40:5060	',cb)
	flowroute.InboundRoutesController.createNewRoute('URIroute1','URI','sip:120664480000@215.122.69.152:5060',cb)
	






    

