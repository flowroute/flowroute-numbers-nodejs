/**
 * FlowrouteNumbersLib
 *
 * This file was automatically generated for flowroute by APIMATIC BETA v2.0 on 02/08/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    CustomAuthUtility = require('../CustomAuthUtility'),
    APIHelper = require('../APIHelper');

var InboundRoutesController = {

    /**
     * TODO: type endpoint description here
     * @param {int|null} limit    Optional parameter: Number of items to display (max 200)
     * @param {int|null} page    Optional parameter: Page to display if paginated
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    list : function(limit, page, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/routes/";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "limit" : limit,
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
     * Create a new inbound route to be used by a phone number
     * @param {string} routeName    Required parameter: New unique name for the route
     * @param {string} type    Required parameter: Type of inbound route
     * @param {string} value    Required parameter: The value to be associated with a route.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {string}
     */
    createNewRoute : function(routeName, type, value, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/routes/{route_name}/";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "route_name" : routeName
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "type" : type,
            "value" : value
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "PUT",
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

module.exports = InboundRoutesController;