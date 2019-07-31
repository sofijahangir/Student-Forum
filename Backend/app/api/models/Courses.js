/**
 * Courses.js
 *
 * @description :: A model definition represents a Course Object.
 * @author      :: Nishant Bhambhani, B00823348
 */

module.exports = {

  attributes: {


    coursename: {
      type: 'string',
      required: true,
      unique: true,
    },
    coursecode: {
      type: 'string',
      required: true,
      unique: true,
    },
    startdate: {
      type: 'string',
      required: true,
    },

    enddate: {
      type: 'string',
      required: true,
    },

    desc: {
      type: 'string',
      required: true,
    },

    isEnrolled: {
      type: 'boolean',
      defaultsTo: false,

    },

    email: {
      type: 'string',
      required: true,
    },

    image: {
      type: 'string',
    }


  },

};