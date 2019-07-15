/**
 * ListDiscussionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    getList: function(request, response) {
        var post = request.allParams();
        if(post.filter=="All")
        {
            if(post.course=="")
            {
                Post.find({email:post.email})
                .exec(function(err,list)
                {
                    if(err)
                    {
                        response.send(err);
                    }
                    else
                    {   
                        console.log(list)
                        response.send(list)
                    }
                })
            }
            else
            {
                Post.find({email:post.email,courseID:post.course})
                .exec(function(err,list)
                {
                    if(err)
                    {
                        response.send(err);
                    }
                    else
                    {   
                        response.send(list)
                    }
                })
            }

        }
        else if(post.filter=="Archived")
        {
            Post.find({email:post.email,courseID:post.course})
            .exec(function(err,list)
            {
                if(err)
                {
                    response.send(err);
                }
                else
                {   
                    response.send(list)
                }
            })
        }
    },

};

