/**
 * CoursesController
 *
 * @description :: Server-side actions displaying post details
 * @author      :: Jesuseyi Will Fasuyi, B00787413
 */

 module.exports = {
     //create post
   create: function(request, response) {
      var comment = request.allParams();
      console.log(comment);
      Detail.create(comment, function (err, user) {
          if (!err) {
              return response.status(201).send({
                  message: 'Comment Added Successfully!!'
              });
          }
          console.log(err);//handle error
          return response.status(500).send({
              message: 'Can Not Add Comment!!'
          });
      });
  },
    async find(req, res){ //find comments by postid
      try{
         var id = req.params.id;
         const comments = await Detail.find({
            postId: id
         });
            return res.ok(comments);
       }
       catch(err){
           return res.serverError(err);
       }
   }
 }