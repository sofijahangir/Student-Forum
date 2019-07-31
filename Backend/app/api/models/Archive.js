/**
 * Archive.jss
 *
 * @description :: Model to describe discussion post archived by the user.
 * @author      :: Nirav Solanki (B00808427)
 */

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    postID: {
      type: 'number',
      required: true
    },
  },

};