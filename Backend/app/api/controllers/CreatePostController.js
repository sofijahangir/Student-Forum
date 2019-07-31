/**
 * CreatePostController
 *
 * @description :: Controller to create new post
 * @author :: Nirav Solanki (B00808427)
 */

module.exports = {

  create: function(request, response) {
    var post = request.allParams();
    post.messageCount = 0;
    Post.create(post, function(err) {
      if (!err) {
        notifysubscribers(post);
        return response.status(201).send({
          message: 'Post Added Successfully!!'
        });
      }

      return response.status(500).send({
        message: 'Can Not Add Post!!'
      });
    });
  },


  getCourses: function(request, response) {
    var user = request.allParams();
    Enroll.find({
      email: user.email
    }).exec(function(err, data) {
      if (err) return next(err);
      response.json(data);
      console.log(data);
    });
  }

}