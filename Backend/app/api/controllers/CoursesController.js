/**
 * CoursesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @author      :: Nishant Bhambhani, B00823348
 */

module.exports = {
  create: function(request, response) {

    var course = request.allParams();
    console.log(course);
    Courses.create(course, function(err) {
      if (!err) {
        var enroll = {
          coursename: course.coursename,
          email: course.email
        };
        Enroll.create(enroll, function(err, user) {
          if (!err) {
            return response.status(201).send({
              message: 'Course Added Successfully!!'
            });
          }
          console.log(err);
          return response.status(500).send({
            message: 'Can Not Add Course!!'
          });
        })


      } else {
        console.log(err);
        return response.status(500).send({
          message: 'Can Not update Course!!'
        });
      }
    })
  },

  // courses action will return all the courses to the frontend project
  courses: function(req, res) {
    var email = req.allParams();

    Courses.find().exec(function(err, course) {
      if (err) {
        return res.send(err);
      } else {
        Enroll.find({
          email: email.email
        }, function(err, enroll) {
          if(err)
          {
              return res.send(err);
          }  
          console.log(enroll,course);
          var length_e = enroll.length;
          var length_c = course.length;
          for (var i = 0; i < length_e; i++) {
            for (var j = 0; j < length_c; j++) {
              
              if (enroll[i].coursename == course[j].coursename) {
                course[j].isEnrolled = true;
              }
            }
          }
          return res.json(course);
        })

      }
 
    });
  },

  // enroll action will change the status of course to enrolled.
  enroll: async function(req, response) {
    var course = req.allParams();
    Enroll.create(course, function(err, user) {
      if (!err) {
        return response.status(201).send({
          message: 'Successful'
        });
      }
      console.log(err);
      return response.status(500).send({
        message: 'Can Not Add Course!!'
      });
    })
  },

  // search action will get the keyword from the frontend and will return the courses as per the requested keyword, which is course name for now.
  search: async function(req, res) {
    var course = req.allParams();
    console.log(course.coursename);
    var coursename = course.coursename;
    var db = sails.getDatastore().manager;
    var c = await db.collection('courses').find({
      "coursename": {
        "$regex": new RegExp(coursename, "i")
      }
    }).toArray();
    Enroll.find({email:course.email}, function(err,enroll){
      var length_e = enroll.length;
      var length_c = c.length;
      
      for(var i = 0; i<length_e;i++){
          for(var j=0;j<length_c;j++)
          {
              if(enroll[i].coursename==c[j].coursename)
              {
                  console.log("Hello");
                  c[j].isEnrolled = true;
                  return res.send(c);
              } 

          }
      }
      return res.send(c);
  });

    console.log(c);
  },


};