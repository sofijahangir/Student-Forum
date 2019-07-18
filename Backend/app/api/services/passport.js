/**
 * passport.js
 *
 * @description :: AUthentication related actions using passport.
 * @author      :: Sharmila Thirumalainathan, B00823668
 *
 */

var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Override the default method to set custom id, as _id is the default key in mongo.

passport.deserializeUser((id, done) => {
  User.findOne({
    _id: id
  }, function(err, user) {
    done(err, user);
  });
});

// Extended the default to include the logic of encryption using bcrypt.
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({
      email: email
    }).exec(function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: 'Unknown user ' + email
        });
      }

      bcrypt.compare(password, user.password, function(err, res) {
        if (!res) return done(null, false, {
          message: 'Invalid Password'
        });
        return done(null, user);
      });
    });
  }
));