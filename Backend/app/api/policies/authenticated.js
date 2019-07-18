/**
 * authenticated.js
 *
 * @description :: A policy to check for authenticated request.
 * @author      :: Sharmila Thirumalainathan, B00823668
 *
 */



module.exports = function(req, res, next) {
  // Common point to check whether the request is authenticated. ALL request will pass through this filter.
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(403).send({
      message: 'Not Authorized'
    });
  }
};