/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var passport = require('passport'),
  bcrypt = require('bcrypt');

module.exports = {
  signin: function(request, response) {
    response.view();
  },

  authenticate: function(request, response) {
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        return response.status(400).send({
          message: 'Invalid Username/password'
        });
        response.send(err);
      }
      request.logIn(user, function(err) {
        if (err) response.send(err);
        return response.send({
          message: 'login successful'
        });
      });
    })(request, response);
  },

  signout: function(request, response) {
    request.logOut();
    response.send({
      message: 'logout successful'
    });
  },


  forgotpassword: async function(request, response) {
    var req = request.allParams()
    var dateTime = Date.now();
    var hashStr = req.email + dateTime;

    var user = await User.findOne({
      email: req.email
    });

    console.log(user);

    if (!user) {
      return response.status(400).send({
        message: "Invalid username/email"
      });
    }


    bcrypt.genSalt(10, (err, salt) => {

      bcrypt.hash(hashStr.toString(), salt, async function(err, hash) {
        if (err) {
          return response.status(500).send({
            message: "Server Error"
          });
        } else {
          var user = await User.updateOne({
            email: req.email
          }).set({
            resetTime: dateTime
          });

          if (!user) {
            return response.send(400, {
              message: "Invalid username/email"
            });
          } else {

            console.log(hash)

            mailer.sendResetPwdMail({
              name: user.name,
              url: hash
            })

            return response.send(200, {
              message: "Reset email is sent"
            });
          }
        }
      });
    });
  },

  resetpassword: async function(request, response) {
    var req = request.allParams()

    await User.findOne({
      email: req.email
    }, function(err, user) {
      if (!user) {
        return response.send(400, {
          message: "Invalid data"
        })
      } else {
        var hashStr = req.email + user.resetTime;
        bcrypt.compare(hashStr.toString(), req.id, function(err, res) {
          if (!res) {
            return response.send(400, {
              message: "Invalid data"
            });
          }


          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.password, salt, async function(err, hash) {
              if (err) {
                return response.status(500).send({
                  message: "Server Error"
                });
              } else {
                await User.updateOne({
                  email: req.email
                }).set({
                  resetTime: '',
                  password: hash
                });
                return response.status(201).send({
                  message: "Password has been changed successfully"
                });
              }
            });
          });

        });
      }
    });
  }
};

module.exports.blueprints = {
  actions: true,
  rest: true,
  shortcuts: true
};