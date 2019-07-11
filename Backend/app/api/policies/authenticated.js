/**
 * authenticated.js
 *
 * @description :: A policy to check for authenticated request.
 * @author      :: Sharmila Thirumalainathan, B00823668
 *
 */



module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(403).send({
      message: 'Not Authorized'
    });
  }
};