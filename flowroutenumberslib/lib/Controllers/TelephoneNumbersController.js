/**
 * FlowrouteNumbersLib
 *
 * This file was automatically generated for flowroute by APIMATIC BETA v2.0 on 02/08/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    CustomAuthUtility = require('../CustomAuthUtility'),
    APIHelper = require('../APIHelper');

var TelephoneNumbersController = {

    /**
     * Returns the routing and billing information for the specified telephone number on your account
     * @param {string} telephoneNumber    Required parameter: This is the TN for which you would like to retrieve configuration details for
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    telephoneNumberDetails : function(telephoneNumber, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/tns/{telephone_number}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "telephone_number" : telephoneNumber
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };
        
        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(options);

        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null, response.body,context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "USER ERROR", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "APPLICATION/SERVER ERROR", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Purchases the telephone number indicated by the request URI, with the billing method indicated in the body. Allowable billing methods are returned in the search results for available telephone numbers.
     * @param {BillingMethod} billing    Required parameter: The billing method to apply to the telephone number being purchased.
     * @param {string} number    Required parameter: Telephone number to purchase
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    purchase : function(billing, number, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/tns/{number}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "number" : number
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8"
        };

        //Remove null values
        APIHelper.cleanObject(billing);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "PUT",
            headers: headers,
            body : APIHelper.jsonSerialize(billing),
        };
        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(options);

        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null, response.body,context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "USER ERROR", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "APPLICATION/SERVER ERROR", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Retrieves a list of all the phone numbers on your account
     * @param {int|null} limit    Optional parameter: Number of items to display (max 200)
     * @param {int|null} page    Optional parameter: Page to display
     * @param {string|null} pattern    Optional parameter: A full or partial telephone number to search for
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    listAccountTelephoneNumbers : function(limit, page, pattern, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/tns/";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "limit" : limit,
            "page" : page,
            "pattern" : pattern
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(options);

        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "USER ERROR", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "APPLICATION/SERVER ERROR", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Updates the routing information for a telephone number on your account, as indicated by the specified URI. The body of the request requires two routes listed in order of preference (primary first and fail over second).
     * @param {string} number    Required parameter: The telephone number who's routing you wish to update
     * @param {array} routes    Required parameter: JSON string containing the The routes obtained from the routes resource that you would like to point your telephone number to.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    update : function(number, routes, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/tns/{number}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "number" : number
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8"
        };

        //Remove null values
        APIHelper.cleanObject(routes);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "PATCH",
            headers: headers,
            body : '{"routes": ' + APIHelper.jsonSerialize(routes) + '}',
        };
        //append custom auth authorization
        CustomAuthUtility.appendCustomAuthParams(options);

        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null, response.body,context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "USER ERROR", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 500) {
                    callback({errorMessage: "APPLICATION/SERVER ERROR", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    }

};

module.exports = TelephoneNumbersController;
