# flowroute-numbers-nodejs

Flowroute-numbers-nodejs is a NodeJS SDK that provides methods for interacting with [Flowroute's](https://www.flowroute.com) v1 API. These methods can be used to accomplish the following:

* Search for purchasable phone numbers
* Purchase phone numbers
* View your owned phone numbers and their related details
* Create new inbound routes
* Update the primary and failover route on a phone number

## Documentation 
The full documentation for v2 of the Flowroute API is available [here](https://developer.flowroute.com/v2.0/docs).

##Before you begin

The following are required before you can deploy the SDK.

### Have your API credentials

You will need your Flowroute API credentials (Access Key and Secret Key). These can be found on the **Preferences > API Control** page of the [Flowroute](https://manage.flowroute.com/accounts/preferences/api/) portal. If you do not have API credentials, contact <mailto:support@flowroute.com>.

### Get a code text editor

Steps in this SDK describe creating one or more script files that allow you to execute the methods. Script files can be created either using a terminal window shell or through using a code text editor. For example, *Sublime Text*. 

###Download Node.js

The flowroute-messaging-nodejs SDK requires Node.js. The installation file can be downloaded [here](https://nodejs.org/en/download/). Choose the installer that matches your operating system. Download the file, but do not install it.

##Install the libraries

> **Note:** You must be connected to the Internet in order to install the required libraries.

1. Open a terminal session. 

2. If needed, create a parent directory folder where you want to install the SDK.
 
3. Go to the newly created folder, and run the following:

 	`git clone https://github.com/flowroute/flowroute-messaging-nodejs.git`
 	
 	The `git clone` command clones the **flowroute-numbers-nodejs** repository as a sub directory within the parent folder.
 	
4.	Change directories to the newly created **flowroute-numbers-nodejs** directory.

##Install Node.js

1.	Install the downloaded Node.js file.

	After installing Node.js, a dependency is required for the **request** module. 

2.	To add the **request** module dependency, in a terminal window go to your **flowroute-numbers-nodejs** directory.

3.	Run the following:

		npm install request
	
	The **request** module is installed.
	
	>**Important:** Depending on your Node.js installation, as you execute methods you might run into errors indicating that modules are missing. To fix this issue, run the `npm install` line above with the name of each missing module.
	
8.	After creating the libraries and installing Node.js, create a file that contains the flowroute-numbers-nodejs methods. This file can then be run from a command line.

## Create a Node.js file to import the Controllers

Importing the SDK allows you to instantiate the Controllers, which contain the methods used to perform tasks with the SDK. In order to do this, create and run a Node.js file. 

1.	Using a code text editor create a new file.

2.	Add the following lines at the top of the file to require the **flowroutenumberslib** and to process any method which returns information within an array:

      //Import the Numbers SDK
		var flowroute = require('./flowroutenumberslib');
		var util = require('util');

	>**Important:** The location where you save your Node.js file determines how the path to **flowroutenumberslib** should be declared. <br>
	
	>*	If the Node.js file is saved in the same directory as the **flowroutenumberslib** directory, then declare the path as `./flowroutenumberslib`.
	
	>*	If the file will be saved in a different directory, you must explicitly call the path to **flowroutenumberslib**. For example, `/users/<user>/<directory path>/flowroute-numbers-nodejs/flowroutenumberslib/`. 
	
	>This SDK assumes the Node.js file is in the same location as the `flowroutenumberslib` directory.       

3.	Add the following lines to set up up your API Access Key and Secret Key:
 
 		//Set your API credentials
		flowroute.configuration.username = "Access Key";
		flowroute.configuration.password = "Secret Key";
		
4.	Replace `Access Key` and `Secret Key` with your Flowroute credentials.

5.	Add a callback function that returns both error and success messages:

		//Set up your callback function
		var cb =  function(err, response){
   		 if(err){
  		  console.log(err);
  		  }
  		  console.log(util.inspect(response, false, null));
  	  		// console.log(response);
		};

	>**Note:** The callback function name is a user-defined variable that can be any name of your own choosing, but whatever name you choose must be used consistently throughout the file. Throughout this SDK, `cb` is the variable named assigned to this function.

6.	Save the file with a **.js** extension in. For example, **sendmsg.js**.

7.	Add the [Controllers](#controllers) and methods to the file. 

8.	After adding the MessageController methods, the file can be run from a terminal window as follows:

		node numbers.js

##### Example Node.js file

The following shows an example of a single Node.js file that imports and instantiates the Controller:

		//Import the Numbers SDK
		var flowroute = require('./flowroutenumberslib');
		
		//Set your API credentials
		flowroute.configuration.username = "1111111";
		flowroute.configuration.password = "m8axLA45yds7kmi2225OQ7BshaADg6vr";
	
		//Set up your callback function
		var cb =  function(err, response){
			if(err){
				console.log(err);
			}
			console.log(response);
		};

With this in mind, you can then decide the approach you want to take towards creating a file. You can create your own Node.js file using any of the following options:
 
 1.	Create a single file that contains all of the Controllers and methods, then commenting (#) out the lines for each Controller and method you don't want to run.
 
 2.	Create a unique file for each Controller, adding only those lines relevant to that Controller and related methods, and then commenting out the lines for each method you're not using. This procedure creates three unique Node.js files.

 3.	 Create a unique file for each method. Each file will then contain the only the lines for the relevant Controller and method.
 
This SDK describes the second option, creating three Node.js files, one for each Controller. However, regardless of which option you select, the file(s) should be saved in the **flowroute-numbers-nodejs** directory. When you want to run a method, run the following on the command line in the **flowroute-numbers-nodejs** directory:

	run <node.js file>

## Controllers<a name=controllers></a>

This following sections describe **flowroute-numbers-nodejs** Controllers:

*	[`PurchasablePhoneNumbersController`](#purchaseno)

*	[`TelephoneNumbersController`](#telephoneno)

*	[`InboundRoutesController`](#inboundco) 

>**Important:** The SDK displays sample responses. Formatting of the responses is provided for clarity only. They are not intended to show the formatting of your own response. 

### PurchasablePhoneNumbersController<a name=purchaseno></a>

Location: **./flowroute-numbers-nodejs/flowroutenumberslib/lib/Controllers**

The Purchasable Phone Numbers Controller contains all of the methods necessary to search through Flowroute's phone number inventory. The following shows a sample file named **purchase.nodejs** file, which invokes only that Controller's methods:

	/Import the Flowroute-numbers-nodejs SDK
	var flowroute = require('./flowroutenumberslib/');
	var util = require('util');
	
	//Set your API credentials
	flowroute.configuration.username = "1111111";
	flowroute.configuration.password = "m8axLA45yds7kmi2225OQ7BshaADg6vr";
	
	//Set up your callback function
	var cb =  function(err, response){
  	  if(err){
 	   console.log(err);
 	   }
 		   console.log(util.inspect(response, false, null));
   	 // console.log(response);
	};

	//List NPAs
	flowroute.PurchasablePhoneNumbersController.listAvailableNPAs(limit,callback)
	
	//List Area and Exchange
	flowroute.PurchasablePhoneNumbersController.listAreaAndExchange(null,null,null,cb);

	//Search
	flowroute.PurchasablePhoneNumbersController.search(limit:null, npa:null, nxx:null, page:null, ratecenter:"null", state:"null",tn:null,callback:callback);

Add any of the following methods after the end of the callback function you added to the file.  If you do not want to execute a specific method, comment that method's lines out with `//`.

*	[`listAvailableNPAs()`](#listnpa)

* 	[`listAreaAndExchange()`](#listnpanxx)

* 	[`search()`](#searchno)

#### `listAvailableNPAs(limit, callback)`<a name=listnpa></a>

The `listAvailableNPAs` method allows you to retrieve a list of every NPA (area code) available in Flowroute's phone number inventory.

#####Usage

Add the following lines to the end of your Node.js file:

	//List NPAs
	flowroute.PurchasablePhoneNumbersController.listAvailableNPAs(limit,callback);

| Parameter | Required |Type |Description                           |
|-----------|----------|-----|--------------------------------|
| `limit`     | True  |integer| Controls the number of items returned. The maximum number of items is 200. The field must be `null` or a number between `1` and `200`. `null`. `null` returns ten NPAs as a default.|
|`callback` | True	| string	| Prints the response out to the screen. This variable name points back to the callback function added to the Node.js file.|

##### Example Usage
	
	//List NPAs
	flowroute.PurchasablePhoneNumbersController.listAvailableNPAs(3,cb)

#####Example response

Based on the request above, the following three NPAs are returned:

	{ npas:
  	 { '201':
   	   { nxxs: '/v1/available-tns/npanxxs/?npa=201',
   	     tns: '/v1/available-tns/tns/?npa=201' },
   	  '202':
   	   { nxxs: '/v1/available-tns/npanxxs/?npa=202',
   	     tns: '/v1/available-tns/tns/?npa=202' },
   	  '203':
   	   { nxxs: '/v1/available-tns/npanxxs/?npa=203',
   	     tns: '/v1/available-tns/tns/?npa=203' } },
  	links: { next: '/v1/available-tns/npas/?limit=3&page=2' } 
  	}
#####Error response

The following errors can be returned:

| Error code | Message  | Description                                           |
|------------|----------|-------------------------------------------------------|
|`422`|HTTP Response Not OK|This typically occurs when a negative number or a number greater than `200` is passed for the limit. |
|`500`|APPLICATION/SERVER ERROR|This typically occurs when `0` is passed for the `limit`. |

#### `listAreaAndExchange(limit, npa, page, callback)`<a name=listnpanxx></a>

The `listAreaAndExchange` method allows you to retrieve a list of every NPANXX (area code and exchange) combination available in Flowroute's phone number inventory.

#####Usage

Add the following lines to the end of your Node.js file:

	//List Area and Exchange
	flowroute.PurchasablePhoneNumbersController.listAreaAndExchange(null,null,null,cb);

The method takes the following parameters:

| Parameter | Required |Type| Description                                                         |
|-----------|----------|--------------|-------------------------------------------------|
| `limit`     | False    | integer| Controls the number of items returned. The maximum number of items is 200. The field must be `null` or a number between `1` and `200`. `null`. `null` returns ten NPAs as a default.    |             |
| `npa`       | False  | integer| Three-digit area code. Limits results to the specified NPA. If `null` is passed, all NPAs are returned. Partial number search is also supported. For example, passing `20` returns all NPA and NXX results that include `20`.|
| `page`      | False  |integer  | Sets which page of the results is returned.` Next` and `Prev` URLs provided at the bottom of the response provide navigation pointers. `null` is supported. The `page` value overrides the value set for the `limit`. For example, if `null` is set for both parameters, all pages are returned instead of just `10`.   |
|`callback` | True	| string	| Prints the response out to the screen. This variable name points back to the callback function added to the Node.js file.|

##### Example Usage

In the following, a request is made to limit the results to `2`, the NPA to `203`, display page `3`, and `cb` for the `callback`:

	//List Area and Exchange
	flowroute.PurchasablePhoneNumbersController.listAreaAndExchange(2,203,3,cb);
	
##### Example response

Based on the parameters passed above, `2` NPAs are returned for NXX `203`, displayed on page `3`: 

		{ npanxxs:
   			{ '203648': { tns: '/v1/available-tns/tns/?npa=203&nxx=648' },
     		  '203654': { tns: '/v1/available-tns/tns/?npa=203&nxx=654' }
     	 },
  		links:
  		 { prev: '/v1/available-tns/npanxxs/?npa=203&limit=2&page=2',
  	 	  next: '/v1/available-tns/npanxxs/?npa=203&limit=2&page=4' }
  		  }
>**Note:** If no results are found for the passed parameters, `{}` is returned.

#####Error response

| Error code | Message  | Description                                           |
|------------|----------|-------------------------------------------------------|
|422|HTTP Response Not OK|Typically this occurs when a negative number or a number greater than `200` is passed for the limit. |
|500|APPLICATION/SERVER ERROR|Typically this occurs when `0` is passed for the `limit`. |

#### `search(limit, npa, nxx, page, ratecenter, state, tn, callback)`<a name=searchno></a>

The search method is the most robust option for searching through Flowroute's purchasable phone number inventory. It allows you to search by NPA, NXX, Ratecenter, State, and/or TN.

#####Usage

Add the following lines to the end of your Node.js file:

	//Search
	flowroute.PurchasablePhoneNumbersController.search(limit:null, npa:null, nxx:null, page:null, ratecenter:"null", state:"null",tn:null,callback:callback);

The method takes the following parameters:

| Parameter  | Required|   Type|          Description                                         |
|------------|----------|------|--------------------------------------------------------|
| `limit`     | False    | integer| Controls the number of items returned. The maximum number of items is 200. The field must be `null` or a number between `1` and `200`. `null`. `null` returns ten NPAs as a default.    |                      |
| `npa`       | False, unless `nxx` is passed, then `True`.  | integer| Three-digit area code. Limits results to the specified NPA. If `null` is passed, all NPAs are returned. Partial number search is also supported. For example, passing `20` returns all NPA and NXX results that include `20`.|
| `nxx`       |False  | integer |Three-digit exchange. Limits the results for the specified NXX. If no `nxx` is passed, `null` is used and all results are returned. Partial search is also supported. For example, passing `'45'` for the `nxx` returns exchanges that include `45`. Note that if you pass an `nxx` you must also pass an `npa`. |
| `page`      | False   | integer |Sets which page of the results is returned.` Next` and `Prev` URLs provided at the bottom of the response provide navigation pointers. If `null` is passed, all pages are returned.   |            |
| `ratecenter` | False |string             | Limits the results to the specified ratecenter.  There is no limit on the number of characters that can be passed. This field is case-insensitive and must be enclosed in quotes (`""`). |                      |
| `state`      | False, unless `ratecenter` is passed, then `True`.|string | Limits results to the specified state or Canadian province. Must be formatted using the two-letter state or province/territory abbreviation. This field is case-insensitive and must be enclosed in quotes (`""`).                    |
| `tn`         | False  |string             | Limits results to the specified telephone number. The phone number must be passed as an 11-digit number formatted as *`1NPAXXXXXX`*.  |
|`callback` | True	| string	| Prints the response out to the screen. This variable name points back to the callback function added to the Node.js file.|

##### Example Usage

In the following example, a search request sets the `limit` to `3`, `206` for the `npa`, `641` for the `nxx`, `2` for the `page`, `SEATTLE` for the `ratecenter`, `WA` for the `state`, and `null` for the `tn`, and `cb` for the `callback`.

	//Search
	flowroute.PurchasablePhoneNumbersController.search(3,206,641,2,"SEATTLE","WA",null,cb);
	
#####Example response

Based on the parameters passed in the method above, the following results are returned:

	{ tns:
   	{ '12066417727':
     	  { initial_cost: '1.00',
       		monthly_cost: '1.25',
        	billing_methods: [Object],
        	ratecenter: 'SEATTLE',
        	state: 'WA' },
     '12066417667':
      	  { initial_cost: '1.00',
       		monthly_cost: '1.25',
        	billing_methods: [Object],
        	ratecenter: 'SEATTLE',
        	state: 'WA' },
     '12066417669':
      	  { initial_cost: '1.00',
       		monthly_cost: '1.25',
        	billing_methods: [Object],
        	ratecenter: 'SEATTLE',
        	state: 'WA' } },
  	links:
   	{ prev: '/v1/available-tns/tns/?npa=206&nxx=641&state=WA&ratecenter=SEATTLE&limit=3&page=1',
     next: '/v1/available-tns/tns/?npa=206&nxx=641&state=WA&ratecenter=SEATTLE&limit=3&page=3' } }

>**Note:** If no results are found for the passed parameters, `{}` is returned.

#####Response field descriptions	

The following information is returned in the response:

Parameter | Description                                             |
|--------|-------------------------------------------------------|
| `tns`  | Object composed of a `telephone number`, `state`, `ratecenter`, and `billing_methods`.|                           |
||	*`telephone number`*- The retrieved telephone number object, which is composed of:|
||	<ul><ul><li> `initial_cost`- The one-time fixed cost for that telephone number. The default value is USD `1.00`.</li></ul>|
| | <ul><ul><li>`monthly_cost`- The recurring monthly cost to maintain that telephone number. The default value is USD `1.25`.</ul>|
| |<ul><ul><li>`billing_methods`- Displays the telephone number's billing method, which will only be `[1] METERED`.|
||	<ul><ul><li>`ratecenter`- The ratecenter associated with the NPANXX.|
||	<ul><ul><li>`state`- The US state or Canadian province or territory in which the NPANXX is located.</li></ul>|

##### Error response

| Error code | Message  | Description                                           |
|------------|----------|-------------------------------------------------------|
|No error code|HTTP Response Not OK|Typically this occurs when a passed value does not fall within the range of allowed values. For example, this might be a `limit` that does not fall within the `1` to `200` range. |

	
### TelephoneNumbersController<a name=telephoneno></a>

Location: **./flowroute-numbers-nodejs/flowroutenumberslib/lib/Controllers**

The Purchasable Phone Numbers Controller contains all of the methods necessary to search through Flowroute's phone number inventory. The following shows a sample file named **purchase.nodejs** file, which invokes only that Controller's methods:

	/Import the Flowroute-numbers-nodejs SDK
	var flowroute = require('./flowroutenumberslib/');
	var util = require('util');
	
	//Set your API credentials
	flowroute.configuration.username = "1111111";
	flowroute.configuration.password = "m8axLA45yds7kmi2225OQ7BshaADg6vr";
	
	//Set up your callback function
	var cb =  function(err, response){
  	  if(err){
 	   console.log(err);
 	   }
 		   console.log(util.inspect(response, false, null));
   	 // console.log(response);
	};
	
	//Purchase a Phone Number
	var billingMethod = {"billing_method":"METERED"};
	flowroute.TelephoneNumbersController.purchase(billingMethod,number,callback);)
	
	//List Account Telephone Numbers
	flowroute.TelephoneNumbersController.listAccountTelephoneNumbers(limit:null,page:null,pattern:null,callback);
	
	//Telephone Number Details
	flowroute.TelephoneNumbersController.telephoneNumberDetails("number", callback);

	//Update Routes
	var rtes = '[{"name":"primary route name"}, {"name":"failover route name"}]';
	flowroute.TelephoneNumbersController.update("number", rtes, callback);

Add any of the following methods after the end of the callback function you added to the file.  If you do not want to execute a specific method, comment that method's lines out with `//`.

*	[`purchase`](#purchaseno)
*	[`listAccountTelephoneNumbers`](#listnumbers)
*	[`telephoneNumberDetails`](#phonedetails)
*	[`update`](#updateroute)

#### `purchase(billing, number, callback)`<a name=purchaseno></a>

The purchase method is used to purchase a telephone number from Flowroute's inventory. 

#####Usage

Add the following lines to the end of your Node.js file:
	
	//Purchase a Telephone Number
	var billingMethod = {"billing_method":"METERED"};
	flowroute.TelephoneNumbersController.purchase(billingMethod,number,callback);

First, define the variable name used in the method: 

|Variable name    |Required  |Type      |Description|
|-----------------|----------|----------|-------------------------------------------------------| 
|`billingMethod`      | True     | string   |The variable name assigned to the billing method. An unlimited number of characters can be used. For this example, `billingMethod` is the name of the variable. |

Next, set the variables that define the `billingMethod`.

| Parameter       | Required | Type| Description                                               |                                                          
|-----------------|----------|--------|-------------------------------------------------------|
| `"billing_method":"METERED"` | True     |string  | Sets the billing method to apply to the purchased number.  It can only be`METERED`, which are unlimited concurrent calls, each billed per-minute used.| 

Finally, define the Flowroute number to purchase and set the callback variable.

| Parameter       | Required | Type|Description                                              |                                                          
|-----------------|----------|------|-------------------------------------------------------|     
| `number = phone number` | True| string | The `phone number` to purchase, using an 11-digit E.164 format: *`1NPANXXXXXX`*. | 

##### Example Usage

In the following method, the billing method is METERED, and the phone number is a number retrieved from the [search](#searchno) method.

	//Purchase a Telephone Number
	var billingMethod = {"billing_method":"METERED"};
	flowroute.TelephoneNumbersController.purchase(billingMethod, 12066417667,cb);

#####Example response

A successful purchase returns an empty string (`''`). No other success message is returned

#####Error response

| Error code | Message  | Description                                           |
|------------|----------|-------------------------------------------------------|
|422  |HTTP Response Not OK|"Business Logic Error: The TN is not available for purchase." Verify that the number was entered correctly.|

#### `listAccountTelephoneNumbers(limit, page, pattern, callback)`<a name=listnumbers></a>

The `listAccountTelephoneNumbers` method is used to retrieve a list of all of the phone numbers on your Flowroute account.

#####Usage

Add the following lines to the end of your Node.js file:

	//List Account Telephone Numbers
	flowroute.TelephoneNumbersController.listAccountTelephoneNumbers(limit:null,page:null,pattern:null,callback);

The method takes the following parameters:

| Parameter | Required |     Type | Description                                    |
|-----------|----------|-----------|-----------------------------------------------|
| `limit`     | False    | integer| Controls the number of items returned. The maximum number of items is 200. The field must be `null` or a number between `1` and `200`. `null`. `null` returns ten telephone numbers as a default.    |                       
| `page`      | False  |integer  | Sets which page of the results is returned.` Next` and `Prev` URLs provided at the bottom of the response provide navigation pointers. If `null` is passed, all pages are returned.   |
| `pattern`   | False | string  | The phone number on which to search. Partial number search is supported, from one digit to 11. For example, if `206` is passed the response returns all phone numbers which include `206`. If neither a number nor `null` are passed, all numbers associated with the account are returned.  |
|`callback` | True	| string	| Prints the response out to the screen. This variable name points back to the callback function added to the Node.js file.|

##### Example Usage

For this example, the `limit` is `3
`, the `page` is `null`, the `pattern` includes `206`, and the `callback` is `cb`.

	//List Account Telephone Numbers
	flowroute.TelephoneNumbersController.listAccountTelephoneNumbers(3,null,206,cb);
	
#####Example response

Based on the passed parameters, the number purchased using the [purchase](#purhcaseno) method above is included within the response:

	{ tns:
  	 { '12062092845':
   	   { billing_method: 'METERED',
   	     routes: [
   	     	{ type: 'SIP-REG', name: 'sip-reg' },
   	     	{ type: 'SIP-REG', name: 'sip-reg' } ],
   	     detail: '/v1/tns/12062092844' },
   	  '12066417667':
   	   { billing_method: 'METERED',
   	     	{ type: 'SIP-REG', name: 'sip-reg' },
   	     	{ type: 'PSTN', name: 'PSTNroute1', value: '178 } ],
   	     detail: '/v1/tns/12066417667' } } 
   	  }  

>**Note:** If no results are found for the passed parameters, `{}` is returned.

#####Response field descriptions

The following information is returned in the response:

Parameter | Description                                             |
|--------|-------------------------------------------------------|
| `tns`  | Object composed of a `telephone number`, `billing_method`, and `routes`.|                           
||	*`telephone number`*- The retrieved telephone number object, which is composed of:|
||	<ul><ul><li> `billing_method`- The billing method assigned to the phone number when the number was purchased. This will only be `METERED`.</ul>|
| |<ul><ul><li>`routes`- Displays the primary and failover routes for the phone number: <ul><li>`type` — Indicates the type of route: `HOST`, `PSTN`, or `URI`. If no route is assigned, `SIP-REG` is the default name assigned to the route.</ul></li> <ul><li>`name` — Name of the route. If no `name` was given to the route, `sip-reg` is the assigned default name.</ul></li> <ul><li>`value` — Value of the route, set for the `type` when the route was created. </ul></li>**Note:** Routes are created using the [createNewRoute](#createroute) method and existing routes can be viewed using the [mlist](#listroutes) method.|

#####Error response

| Error code | Message  | Description                                           |
|------------|----------|-------------------------------------------------------|
|422|HTTP Response Not OK|Typically this occurs when a negative number or a number greater than `200` is passed for the limit. |
|500|APPLICATION/SERVER ERROR|Typically this occurs when `0` is passed for the `limit`. |

#### `telephoneNumberDetails(telephoneNumber, callback)`<a name=phonedetails></a>

The `telephone_number_details` method is used to retrieve the billing method, primary route, and failover route for the specified telephone number. 

#####Usage

Add the following lines to your Node.js file:

	//Telephone Number Details
	flowroute.TelephoneNumbersController.telephoneNumberDetails("number", callback);

The method takes the following parameters:

| Parameter       | Required | Type   |Description                                    |
|-----------------|----------|--------|-------------------------------------------|
| `number` | True     | string |    The telephone number on which to query. You must use an 11-digit, E.164 number, formatted as *`1NPANXXXXXX`*. Neither partial number search nor multiple number search are supported. |

##### Example Usage

For the following example, details are requested on the telephone number purchased above using the [purchase](#purchaseno) method:

	//Telephone Number Details
	flowroute.TelephoneNumbersController.telephoneNumberDetails("12066417667", cb);

#####Example response

The response returns the following phone number details:

	{
	  "billing_method": "METERED",
  	"routes": [
   	 {
   	   "type": "SIP-REG",
   	   "name": "sip-reg"
   	 },
   	 {
   	   "type": "SIP-REG",
   	   "name": "sip-reg"
   	 }
  				]
	}

#####Response field descriptions	
 
The following information is returned in the response:

Parameter | Description                                             |
|--------|-------------------------------------------------------|                       
|`billing_method`| The billing method assigned to the phone number when the number was purchased. This will be only be `METERED`.|
|`routes` |Displays the primary and failover routes for the phone number. The first route group displays information about the primary route, the second about the failover route:<br> <ul><li>`type` — Indicates the type of route: `HOST`, `PSTN`, or `URI`. If no route is assigned, `SIP-REG` is the default name assigned to the route.</li> <li>`name` — Name of the route. If no `name` was given to the route, `sip-reg` is the default name.</ul></li>**Note:** Routes are created using the [createNewRoute](#createroute) method and can be assigned using the `update` method.|

#####Error response

| Error code | Message  | Description                                           |
|------------|----------|-------------------------------------------------------|
|404|HTTP Response Not OK|Typically this occurs when an incorrect telephone number is used in the method. |

#### update(number, routes, callback)<a name=updateroute></a>

The `update` method is used to update both the primary and failover route for a phone number, specified within an array. See Example Usage below. The first route name specified within the array is assigned as the primary route and the second route name assigned as the failover route. The list of available route names can be retrieved by using the the [`list`](#listroutes) method in the InboundRoutesController.

>**Note:** In order to apply an existing route to a number, the route must first be created using the [createNewRoute](#createRoute) method. To view a list of your existing routes, use the [`list`](#listroutes) method.

#####Usage

Add the following lines to your Node.js file:

	//Update Routes
	var rtes = '[{"name":"primary route name"}, {"name":"failover route name"}]';
	flowroute.TelephoneNumbersController.update("number", rtes, callback);


First, define the variable name that identifies the array:

| Parameter       | Required | Type |Description |                                                     
|-----------------|----------|-------|----------------------------------------------------------|
|`rtes`|True| string| Variable name that identifies the array. This field supports an unlimited number of characters. In this example, `rtes` is used.|

Next, define the variables that compose the array:

| Parameter       | Required | Data type| Usage                                                                  |
|-----------------|----------|----------|-------------------------------------------------|
|`primary route/failover route'`|True| string| Name of an existing route. The first `"name"` in the array is assigned as the primary route; the second `name` in the array is assigned as the secondary, or failover, route. See [`create_new_route`](#createroute) for the steps to create a route.|
| `number` | True   | string  | The Flowroute telephone number you own on which to update the routes. It must use an 11-digit, E.164 format: *`1NPANXXXXXX`*.          |

##### Example usage

In the following example, the primary route is updated to use `MyPSTN`, while the failover route is updated to use `MyHost2`:

	//Update Routes
	var rtes = '[{"name":"MyPSTN"}, {"name":"MyHost2"}]';
	flowroute.TelephoneNumbersController.update("12066417667", rtes, cb);

#####Example response

An empty string (`''`) is returned for a successful update. To view the route changes on the phone number, run the 
[`listAccountTelephoneNumbers()`](#listnumbers) or [`telephoneNumberDetails()`](#phonedetails) methods.

##### Error response

| Error code | Message  | Description                                           |
|------------|----------|-------------------------------------------------------|
|  404|  HTTP Response Not OK | Not found. An incorrect route name or an incorrect phone number was passed.|

### InboundRoutesController

Location: **./flowroute-numbers-nodejs/flowroutenumberslib/lib/Controllers** 

The InboundRoutesController contains all of the methods necessary to search through Flowroute's phone number inventory. The following shows a sample file named **routes.nodejs** file, which invokes that Controller's methods:

	/Import the Flowroute-numbers-nodejs SDK
	var flowroute = require('./flowroutenumberslib/');
	var util = require('util');
	
	//Set your API credentials
	flowroute.configuration.username = "1111111";
	flowroute.configuration.password = "m8axLA45yds7kmi2225OQ7BshaADg6vr";
	
	//Set up your callback function
	var cb =  function(err, response){
  	  if(err){
 	   console.log(err);
 	   }
 		   console.log(util.inspect(response, false, null));
   	 // console.log(response);
	};
	
	//List Routes
	flowroute.InboundRoutesController.list(limit, page, callback);
	
	//Create a New Route
	flowroute.InboundRoutesController.createNewRoute("routeName", "type", "value", callback);

Add any of the following TelephoneNumbersController methods at the end of your Node.js file. If you do not want to execute a specific method, comment those lines out with `//`.

The Controller contains the following methods:

*	[`list`](#listroutes)
* 	[`createNewRoute`](#createroute)

#### list (limit, page, callback)<a name=listroutes></a>

The `list` method is used to return all of the existing inbound routes from your Flowroute account.

#####Usage

	//List Routes
	flowroute.InboundRoutesController.list(limit, page, callback);

The method takes the following parameters:

| Parameter | Required | Type   |Description                                    |
|-----------|----------|---------|----------------------------------------|
| `limit`     | False    | integer| Controls the number of items returned. The maximum number of items is 200. The field must be `null` or a number between `1` and `200`. `null`. `null` returns ten NPAs as a default.    |                       
| `page`      | False  |integer  | Sets which page of the results is returned.` Next` and `Prev` URLs provided at the bottom of the response provide navigation pointers. If `null` is passed, all pages are returned.   |
|`callback` | True	| string	| Prints the response out to the screen. This variable name points back to the callback function added to the Node.js file.|

##### Example Usage

In the following example, a limit of `10` routes is to be returned, and only page `1` displayed:

	//List Routes
	flowroute.InboundRoutesController.list(10, 1, cb)
	
#####Example response

Based on the parameters passed in the method, the following results are returned:

	{ routes:   	{ MyNewURIroute: { type: 'URI', value: 'sip:18002364456@215.122.69.152:5060' },   	  MyHost2: { type: 'HOST', value: '24.239.24.45:5060' },  	  MyURI2: { type: 'URI', value: 'sip:112066417744@215.122.69.152:5060' },  	  'sip-reg': { type: 'SIP-REG', value: null },  	  MyPSTN2: { type: 'PSTN', value: '18002364455' },  	  MyPSTN: { type: 'PSTN', value: '12065551212' }, 	  MyNewPSTNroute: { type: 'PSTN', value: '18002364456' },	  PSTNroute1: { type: 'PSTN', value: '178' },      URIroute1: { type: 'URI', value: 'sip:16476998778@215.122.69.152:5060' },      MyHost: { type: 'HOST', value: '24.239.23.45:5060' } }, 	 links: { next: '/v1/routes/?limit=10&page=2' } 
 	 }
 	 
#####Response field descriptions

The following information is returned in the response:

| Parameter |  Description                                                     |
|-----------|--------------------------------------------------------------------------------|
| `[routeName]` |  The name of the route assigned using the `createNewRoute` method. It is composed of:<ul> <li>`type`  The type of route created using the `createNewRoute` method. Will be `HOST`, `PSTN`, or `URI`. If no route type was assigned, `SIP-REG` is used as the default. <li>`value` Value of the route, assigned to the route `type` using the `createNewRoute` method.</ul</li>|

#####Error response

The following error can be returned:

| Error code | Message  | Description                                           |
|------------|----------|-------------------------------------------------------|
|422|HTTP Response Not OK|Typically this occurs when a negative number, a number greater than `200`, or `0` is passed for the limit. |

#### `createNewRoute (routeName, type, value, callback)`<a name=createroute></a>) 

The `createNewRoute` method is used to create a new inbound route.

#####Usage
	//Create a New Route
	flowroute.InboundRoutesController.createNewRoute("routeName", "type", "value", callback);

The method takes the following parameters:

| Parameter | Required | Type| Description                                                                  |
|-----------|----------|------|-----------------------------------------------------------------------------|
| `routeName` | True    |  string| The name of the new route. An unlimited number of alphanumeric characters is supported. There are no unrestricted characters.  |
| `type`      | True   |  string |The type of route you would like to create. Valid options are `HOST`, `PSTN`, and `URI`. |
| `value`     | True    |string |  Value of the route, dependent on the `type`: <ul><li>If `HOST`, the value must be an IP address or URL with an optional port number—for example, an IP address could be `24.239.23.40:5060` or a URL could be `myphone.com`. If no port is specified, the server will attempt to use DNS SRV records. <li>If `PSTN`, the value must be formatted as a valid E.164, 11-digit formatted North American phone number—for example,`12065551212 `. You cannot use the same number as the number for which the route is created. <li>If `URI`, the value must be formatted as  `protocol:user@domain[:port][;transport=<tcp/udp>`—for example, `sip:alice@seattle.com`,  `sip: 12065551212@215.122.69.152:5060;transport=tcp`, or `sips:securecall@securedserver.com`. You cannot use the same number as the number for which the route is created.</li></ul>              |  
|`callback` | True	| string	| Prints the response out to the screen. This variable name points back to the callback function added to the Node.js file.|                               |

##### Example Usage

In the following example, three new routes are created:

	//Create a New Route
	flowroute.InboundRoutesController.createNewRoute("MyNewPSTNroute", "PSTN", "18002364456", cb);
	flowroute.InboundRoutesController.createNewRoute("MyNewHOSTroute","HOST","24.239.23.40:5060", cb);
	flowroute.InboundRoutesController.createNewRoute("MyNewURIroute","URI","sip: 18002364456@215.122.69.152:5060", cb);
	
#####Example response

An empty string, `''`, is returned for each newly created route. No other success message is returned.

#####Error response

The following error can be returned:

| Error code | Message  | Description                                           |
|-------------|---------|----------|
|422|HTTP Response Not OK|Typically this occurs when a value is entered incorrectly. |