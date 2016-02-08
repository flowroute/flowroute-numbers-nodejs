
/**
 * FlowrouteNumbersLib
 *
 * This file was automatically generated for flowroute by APIMATIC BETA v2.0 on 02/08/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Route
 *
 * @constructor
 */
function Route() {
    this.name  = "sip-reg";     
}

Route.prototype = new BaseModel();
Route.prototype.constructor = BaseModel;

/**
 * Unique name of the inbound route, or the reserved options of 'sip-reg'.
 *
 * @return {string}
 */
Route.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
Route.prototype.setName = function(value) {
    this.name = value;
};

module.exports = Route;