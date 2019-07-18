/**
 * UserController
 *
 * @description :: Server-side actions for handling user-related requests.
 * @author      :: Sharmila Thirumalainathan, B00823668
 */

var auth = require('./AuthController');
var bcrypt = require('bcrypt');

module.exports = {

  fetchName: function(request, response) {
    var email = request.allParams();
    User.find({
        email: email.emailID
      })
      .exec(function(err, user) {
        if (err) {
          response.send(err);
        } else {
          response.send(user[0].name)
        }
      })
  },

  create: function(request, response) {

    var user = request.allParams();

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          return response.status(500).send({
            error: err
          });
        } else {
          user.password = hash;
          console.log(user)
          User.create(user, function(err, user) {
            if (!err) {
              return auth.authenticate(request, response);
            }
            return response.status(500).send({
              error: err
            });
          })
        }
      });
    });
  }
};