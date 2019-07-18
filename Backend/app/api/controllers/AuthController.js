/**
 * UserController
 *
 * @description :: Server-side actions for authenticating incoming requests.
 * @author      :: Sharmila Thirumalainathan, B00823668
 */

var passport = require('passport'),
  bcrypt = require('bcrypt');

module.exports = {

  authenticate: function(request, response) {
    return passport.authenticate('local', (err, user, info) => {
      if ((err) || (!user)) {
        return response.status(400).send({
          message: 'Invalid Username/password'
        });
        response.send(err);
      }
      request.logIn(user, (err) => {
        if (err) response.send(err);
        if (request.allParams().name) {
          return response.status(201).send({
            message: 'User created successfully'
          });
        }
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

    if (!user) {
      return response.status(400).send({
        message: "Invalid username/email"
      });
    }

    // Generated a hash id match to reset password based on request timestamp and emailID which will be appended as QueryParam.
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

            mailer.sendResetPwdMail({
              name: user.name,
              url: `https://student-forum-2020.herokuapp.com/resetpassword?id=${hash}`,
              email: user.email
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

        // Compared the hash id match to from  QueryParam to see if it matches the given e-mail id.
        bcrypt.compare(hashStr.toString(), req.id, function(err, res) {
          if (!res) {
            return response.send(400, {
              message: "Invalid data"
            });
          }

          // Password updation
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.password, salt, async function(err, hash) {
              if (err) {
                return response.status(500).send({
                  message: "Server Error"
                });
              } else {
                await User.updateOne({
                  email: user.email
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