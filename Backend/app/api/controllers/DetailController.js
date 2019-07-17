/**
 * CoursesController
 *
 * @description :: Server-side actions displaying post details
 * @author      :: Jesuseyi Will Fasuyi, B00787413
 */

 module.exports = {
    async create(req, res){
      try{
         let params = req.allParams();
         if(!params.postId){
            return res.badRequest({err: 'postId is required'});
         }
         const results = await Detail.create({
            postId: params.postId,
            content: params.content,
            email: params.email
         }());
         return res.ok(results);
      }
      catch(err){
         return res.serverError(err);
      }
    },
    async find(req, res){
      try{
         var id = req.params.id;
         const comments = await Detail.find({
            where:{postId: id}
         });
            return res.ok(comments);
       }
       catch(err){
           return res.serverError(err);
       }
   }
 }