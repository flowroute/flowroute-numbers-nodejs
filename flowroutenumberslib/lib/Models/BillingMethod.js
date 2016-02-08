
/**
 * FlowrouteNumbersLib
 *
 * This file was automatically generated for flowroute by APIMATIC BETA v2.0 on 02/08/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of BillingMethod
 *
 * @constructor
 */
function BillingMethod() {
    this.billingMethod = null;     
    //Append to variable dictionary
    this._variableDict['billingMethod'] = 'billing_method';
}

BillingMethod.prototype = new BaseModel();
BillingMethod.prototype.constructor = BaseModel;

/**
 * VPRI or METERED
 *
 * @return {string}
 */
BillingMethod.prototype.getBillingMethod = function() {
    return this.billingMethod;
};

/**
 * Setter for BillingMethod
 * 
 * @param {string} value 
 */
BillingMethod.prototype.setBillingMethod = function(value) {
    this.billingMethod = value;
};

module.exports = BillingMethod;