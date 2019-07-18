/**
 * CoursesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @author      :: Nishant Bhambhani, B00823348
 */

module.exports = {
    create: function (request, response) {

        var course = request.allParams();
        console.log(course);
        Courses.create(course, function (err, user) {
            if (!err) {
                return response.status(201).send({
                    message: 'Course Added Successfully!!'
                });
            }
            return response.status(500).send({
                message: 'Can Not Add Course!!'
            });
        })
    },

    // courses action will return all the courses to the frontend project
    courses: function (req, res) {
        Courses.find().exec(function (err, data) {
            if (err) return next(err);
            res.json(data);
            console.log(data);
        });
    },

    // enroll action will change the status of course to enrolled. 
    enroll: async function (req, res) {
        var course = req.allParams();
        console.log(course.id);
        var c = await Courses.updateOne({
            id: course.id
        }).set({
            enroll: true
        });
        return res.send(c);
    },

    // search action will get the keyword from the frontend and will return the courses as per the requested keyword, which is course name for now. 
    search: async function (req, res) {
        var course = req.allParams();
        console.log(course.coursename);
        var c = await Courses.find({
            coursename: course.coursename
        })
        return res.send(c);
    },




};

