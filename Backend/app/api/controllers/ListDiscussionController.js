/**
 * ListDiscussionController
 *
 * @description :: Contoller to fetch list of discussions
 * @author      :: Nirav Solanki (B00808427)
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

