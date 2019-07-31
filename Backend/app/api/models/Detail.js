/**
 * Courses.js
 *
 * @description :: Model definition for comments under a particular discussion.
 * @author      :: Jesuseyi Will Fasuyi, B00787413
 */

module.exports = {

  attributes: {
    postId: {
      type: "String",
      required: true
    },
    content: {
      type: "String",
      required: true
    },
    email: {
      type: 'string',
      required: true,
    },
    isannonymous: {
      type: 'boolean',
      required: true
    }

  }
}