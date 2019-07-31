/**
 * User.js
 *
 * @description :: A model definition represents a subscriber Object.
 * @author      :: Sharmila Thirumalainathan, B00823668
 *
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true
    },

    resetTime: {
      type: 'string'
    }
  }

};