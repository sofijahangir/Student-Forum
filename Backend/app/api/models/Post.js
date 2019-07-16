/**
 * Post.js
 *
 * @description :: Model to describe the discussion posts.
 * @author      :: Nirav Solanki (B00808427)
 */

module.exports = {

  attributes: { 
    title: {
      type: 'string',
      required: true
    },  
    content: {
      type: 'string',
      allowNull: true,
    },  
    createdAt: {
      type: 'number',
      autoCreatedAt: true,
    },
    allowAnon: {
      type: 'boolean',
      required: true
    },

    email: {
      type: 'string',
      required: true,
    },

    courseID: {
      type: 'number',
      required: true,
    },

    messageCount: {
      type: 'number',
      required:true,
    },
  },

};
 
