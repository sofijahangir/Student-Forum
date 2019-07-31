/**
 * ListDiscussionController
 *
 * @description :: Contoller to fetch list of discussions
 * @author      :: Nirav Solanki (B00808427)
 */

module.exports = {

  getList: function(request, response) {
    var post = request.allParams();
    if (post.filter == "All") {
      Post.find()
        .exec(function(err, list) {
          if (err) {
            console.log(err);
            return response.send(err);
          } else {
            Enroll.find({
                email: post.email
              })
              .exec(function(err, enroll) {
                if (err) {
                  console.log(err);
                  return response.status(500).send({
                    message: 'Unable to fetch list'
                  });
                } else {
                  console.log(list);
                  var length_e = enroll.length;
                  var length_l = list.length;
                  var newPosts = [];
                  console.log("Course", enroll)
                  for (var i = 0; i < length_e; i++) {
                    for (var j = 0; j < length_l; j++) {
                      console.log(enroll[i].coursename, list[j].course);
                      if (enroll[i].coursename == list[j].course) {
                        console.log("Hello");
                        newPosts.push(list[j]);
                      }
                    }
                  }
                  return response.json(newPosts);
                }
              });
          }
        })
    } else if (post.filter == "Archived") {
      Post.find({
          email: post.email
        })
        .exec(function(err, list) {
          if (err) {
            return response.send(err);
          } else {
            return response.send(list)
          }
        })
    } else if (post.filter == "Trending") {
      Post.find({
          email: post.email
        })
        .exec(function(err, list) {
          if (err) {
            return response.send(err);
          } else {
            var today = new Date();
            var length = list.length;
            for (var i = 0; i < length; i++) {
              console.log("Hello");
            }
            return response.send(list)
          }
        });
    }
  },

};