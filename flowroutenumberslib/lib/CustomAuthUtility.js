/**
  * FlowrouteNumbersLib
  *
  * This file was automatically generated for flowroute by APIMATIC BETA v2.0 on 02/08/2016
  */

var configuration = require('./configuration');
var flowrouteUtils  = require('./flowrouteUtils');

var CustomAuthUtility = {

    /**
     * Appends the necessary custom credentials for making this authorized call
     * @param	{HttpRequest} request    The out going request to access the resource
     */
    appendCustomAuthParams:function(request) {
        // TODO: Add your custom authentication here
        // The following properties are available to use
      // configuration.username
      // configuration.password
        // 
        // ie. Add a header through:
        //request.headers["key"] = "value"
        flowrouteUtils.appendCustomAuth(request);
    }
};

module.exports = CustomAuthUtility;
