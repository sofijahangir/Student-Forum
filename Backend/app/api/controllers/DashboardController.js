/**
 * DashboardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    getCourses: function(req,res) {
        var email = req.allParams();
        var courses = [];
        Courses.find().exec(function(err, course) {
            if (err) {
                return res.send(err);
            } 
            else {
                Enroll.find({
                email: email.email
                }, function(err, enroll) {
                
                    var length_e = enroll.length;
                    var length_c = course.length;

                    for(var i = 0; i<length_c;i++)
                    {
                        for(var j = 0; j<length_e; j++)
                        {
                            if(course[i].coursename==enroll[j].coursename)
                            {
                                courses.push(course[i]);
                            }
                        }
                    }
                    return res.json(courses);
                })

            }
        });
    }

};

