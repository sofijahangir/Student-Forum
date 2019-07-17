/**
 * CreatePostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function(request, response) {
        var post = request.allParams();
        post.messageCount = 0;
        var courseName = post.course;
        delete post.course;
        post.courseID = 1;
        //console.log(post);
        Post.create(post, function (err, user) {
            if (!err) {
                return response.status(201).send({
                    message: 'Post Added Successfully!!'
                });
            }
            console.log(err);
            return response.status(500).send({
                message: 'Can Not Add Post!!'
            });
        });
    },

    getCourses: function(request,response) {
        var user = request.allParams();
    }

};

