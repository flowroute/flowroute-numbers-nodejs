/**
  * @module FlowrouteNumbersLib
  *  
  * Phone number management
  */

var configuration = require('./configuration'),
    InboundRoutesController = require('./Controllers/InboundRoutesController'),
    PurchasablePhoneNumbersController = require('./Controllers/PurchasablePhoneNumbersController'),
    TelephoneNumbersController = require('./Controllers/TelephoneNumbersController'),
    BillingMethod = require('./Models/BillingMethod'),
    Route = require('./Models/Route');


function initializer(){}

//Main functional components of FlowrouteNumbersLib
initializer.configuration = configuration;
initializer.InboundRoutesController = InboundRoutesController;
initializer.PurchasablePhoneNumbersController = PurchasablePhoneNumbersController;
initializer.TelephoneNumbersController = TelephoneNumbersController;

//Main Models of FlowrouteNumbersLib
initializer.BillingMethod = BillingMethod;
initializer.Route = Route;

module.exports = initializer;