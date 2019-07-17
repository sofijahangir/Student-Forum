/**
 * Courses.js
 *
 * @description :: Model definition for comments under a particular discussion.
 * @author      :: Jesuseyi Will Fasuyi, B00787413
 */

 module.exports = {

    attributes : {
            postId : {
                collection: 'Post',
                via: '_id',
                unique: true,
                required: true
            },
            content: {
                type: "String",
                required: true
            },
            email: {
                collection: 'User',
                via: 'email',
                required: true
            }
    }
 }