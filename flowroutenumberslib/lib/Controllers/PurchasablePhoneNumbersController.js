/**
 * FlowrouteNumbersLib
 *
 * This file was automatically generated for flowroute by APIMATIC BETA v2.0 on 02/08/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    CustomAuthUtility = require('../CustomAuthUtility'),
    APIHelper = require('../APIHelper');

var PurchasablePhoneNumbersController = {

    /**
     * Retrieves a list of the NPA-NXXs (area codes and exchanges) that contain purchasable telephone numbers.
     * @param {int|null} limit    Optional parameter: Number of items to display (Max 200)
     * @param {int|null} npa    Optional parameter: Restricts the results to this NPA.
     * @param {int|null} page    Optional parameter: Page to display
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    listAreaAndExchange : function(limit, npa, page, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/available-tns/npanxxs/";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "limit" : limit,
            "npa" : npa,
            "page" : page
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
     * Retrieves a list of all NPAs (area codes) that contain purchasable telephone numbers.
     * @param {int} limit    Required parameter: Number of items to display (Max 200).
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    listAvailableNPAs : function(limit, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/available-tns/npas/";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "limit" : limit
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
     * TODO: type endpoint description here
     * @param {int|null} limit    Optional parameter: Number of items to display (Max 200)
     * @param {int|null} npa    Optional parameter: Restricts the results to the three digit NPA (area code) specified. This is optional, unless NXX is present
     * @param {int|null} nxx    Optional parameter: Restricts the results to the three digit NXX (exchange) specified.
     * @param {int|null} page    Optional parameter: Page to display
     * @param {string|null} ratecenter    Optional parameter: Restricts the results to the ratecenter specified. If present, state is required
     * @param {string|null} state    Optional parameter: Restricts the results to the state specified. This is optional, unless ratecenter is present.
     * @param {string|null} tn    Optional parameter: Restricts the results to the telephone number specified.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    search : function(limit, npa, nxx, page, ratecenter, state, tn, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/available-tns/tns/";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "limit" : limit,
            "npa" : npa,
            "nxx" : nxx,
            "page" : page,
            "ratecenter" : ratecenter,
            "state" : state,
            "tn" : tn
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
        
    }

};

module.exports = PurchasablePhoneNumbersController;