/**
 * User.js
 *
 * @description :: A model definition represents a User Object.
 * @author      :: Sharmila Thirumalainathan, B00823668
 *
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },

    resetTime: {
      type: 'string'
    }
  },

  customToJSON: function() {
    return _.omit(this, ['password'])
  },

  beforeCreate: function(user, proceed) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          proceed(err);
        } else {
          proceed(null, user);
        }
      });
    });
  }

};