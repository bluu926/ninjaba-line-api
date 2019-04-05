'use strict'
const Service = require('./service')
const SignatureValidator = require('./signatureValidator')

module.exports = {

  init (options) {
    this.client = new Service(options)
    this.validator = new SignatureValidator(options)
  }

}