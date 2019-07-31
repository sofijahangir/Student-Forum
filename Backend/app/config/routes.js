/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },

  'POST /signin': {
    controller: 'AuthController',
    action: 'authenticate'
  },

  'POST /signout': {
    controller: 'AuthController',
    action: 'signout'
  },

  'POST /resetpassword': {
    controller: 'AuthController',
    action: 'resetpassword'
  },

  'POST /forgotpassword': {
    controller: 'AuthController',
    action: 'forgotpassword'
  },

  'Post /addPost': {
    controller: 'CreatePostController',
    action: 'create'
  },

  'Post /getUserCourses': {
    controller: 'CreatePostController',
    action: 'getCourses'
  },

  'Get /getDiscussions': {
    controller: 'ListDiscussionController',
    action: 'getList'
  },

  'Post /getName': {
    controller: 'UserController',
    action: 'fetchName'
  },

  'POST /addcourse': {
    controller: 'CoursesController',
    action: 'create'
  },

  'GET /getcourse': {
    controller: 'CoursesController',
    action: 'courses'
  },

  'POST /enroll': {
    controller: 'CoursesController',
    action: 'enroll'
  },

  'POST /searchcourse': {
    controller: 'CoursesController',
    action: 'search'
  },

  'POST /notifications': {
    controller: 'NotificationController',
    action: 'pushNotification'
  },

  'POST /newComents': {
    controller: 'DetailController',
    action: 'create'
  },

  'GET /getDiscussions/:id': {
    controller: 'DetailController',
    action: 'find'
  },





  'Post /getDashboardCourses': {
    controller: 'DashboardController',
    action: 'getCourses'
  }




  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};