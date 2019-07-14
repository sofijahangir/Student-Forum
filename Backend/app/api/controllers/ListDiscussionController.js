/**
 * ListDiscussionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    getList: function(request, response) {
        var post = request.allParams();

        if(post.email==null)
        {
            return response.status(500).send({
                error: "User is invalid"
            });
        }
        else if(post.filter!=null)
        {
            if(post.course!=null)
            {
                
            }
            else
            {
                
            }
        }
        else if(post.course!=null)
        {

        }
        else
        {

        }
    },

};

