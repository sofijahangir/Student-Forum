var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

module.exports = {
  http: {
    middleware: {
      passportInit: passport.initialize(),
      passportSession: passport.session()

    }
  }
};