var configuration = require('./configuration');
var APIHelper = require('./APIHelper');
var crypto = require('crypto');
var url = require('url');

var util = require('util');
var utf8 = require('utf8');
var FlowrouteUtils = {

    /**
     * Appends the necessary OAuth credentials for making this authorized call
     * @param	{HttpRequest} request    The out going request to access the resource
     */
    appendCustomAuth:function(request) {
        //Get the HTTP method
        var method = request.method;

        //Generate the x-timestamp header.
        var date = new Date();
        var timestamp = date.toISOString().slice(0, 19)+'Z';
        request.headers['X-Timestamp']= timestamp;
        //console.log('headers', request.headers);


        //Generate MD5 of the request body. 
        var bodyHash = undefined;
        if(request.formData){
            bodyHash = this.getFormHash(request.formData)
        }else if(request.form){
            bodyHash = this.getFormHash(request.form)
        }else if(request.body){
            bodyHash = this.getBodyHash(request.body);
        }else{
            bodyHash ="";
        }


        //Prepare the canonical request URI
        var canonicalURI = this.getCanoncialRequestURI(request);
        //console.log('Canoncial URI', canonicalURI);

        //Combine to define the message string
        var tokens = [timestamp, method, bodyHash, canonicalURI];
        var messageString = utf8.encode(tokens.join('\n'));

        //Generate the password signature
        var signature = this.getSignature(messageString);

        //Append as basic auth
        request.username = configuration.username;
        request.password = signature;
    },

    getSignature:function(messageString){
        var secretKey = configuration.password;
        var hash = crypto
          .createHmac("sha1",secretKey)
          .update(messageString)
          .digest("hex");
        return hash
    },
    getCanoncialRequestURI:function(request){
        var originalUrl = request.queryUrl;
        var parsed = url.parse(originalUrl, true); //true denotes parse query string.
        var path = parsed.pathname;
        var host = parsed.host;
        var protocol = parsed.protocol;
        var queryParams = parsed.query || {};
        //console.log(queryParams);

        queryParams = this.sortQueryParameters(queryParams);

        var orderedQueryParams =  queryParams.join('&')
        if(orderedQueryParams.length>0){
            //Update request's url
            request.queryUrl = util.format('%s//%s%s?%s', protocol,host,path,orderedQueryParams);
        }
        //console.log('query parameters',orderedQueryParams);
        //console.log('path',path)
        var cononcialUri = util.format('%s//%s%s\n%s', protocol,host,path,orderedQueryParams);
        return cononcialUri;

    },

    sortQueryParameters:function(queryParams){

        //Get the keys
        var query = [];
        for (var key in queryParams) {
            query.push(key);
        }
        //Sort the keys
        var sortedKeyArray = query.sort(function(a, b){ return a < b ? -1 : 1 });
        
        //Attach the keys + values
        var queryArray = [];
        for (var index in sortedKeyArray) {
            var key = sortedKeyArray[index]
            var value = queryParams[key]
            queryArray.push(key+"="+value);
        }
        return queryArray


    },

    /**
     * Get the hash for dictionary intended for url formencoded data. 
     *
     */
    getFormHash:function(form){
        console.log(flattenString)
        var hash = crypto
          .createHash("md5")
          .update(flattenString)
          .digest("hex");
        return hash
    },
    getBodyHash:function(stringData){
        var hash = crypto
          .createHash("md5")
          .update(stringData)
          .digest("hex");
        return hash
    }

};

module.exports = FlowrouteUtils;
