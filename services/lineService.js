"use strict";
const Service = require("../controllers/lineClient");
const SignatureValidator = require("../utils/signatureValidatorUtil");

module.exports = {
  init(options) {
    this.client = new Service(options);
    this.validator = new SignatureValidator(options);
  }
};
