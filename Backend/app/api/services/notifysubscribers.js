/**
 * authenticated.js
 *
 * @description :: Async func to notify subscribers
 * @author      :: Sharmila Thirumalainathan, B00823668
 *
 */



module.exports = async function(post) {

  console.log("post", post);

  Enroll.find({
    coursename: post.course
  }).exec(async function(err, users) {
    if (!users) {
      return;
    }
    console.log("Users", users);

    for (var i = 0; i < users.length; i++) {
      if (users[i].email != post.email) {

        var user = await User.findOne({
          email: users[i].email
        });

        var owner = await User.findOne({
          email: post.email
        });

        var subscriber = await Subscriber.findOne({
          email: users[i].email
        });

        if (subscriber) {
          await WebNotification.create({
            email: user.email,
            title: 'New Discussion',
            body: owner.name + ' has posted in ' + post.course
          });
        }

        notifier.sendNotification({
          name: user.name,
          email: user.email,
          owner: owner.name,
          group: post.course,
          title: post.title
        });
      }
    }
  });

};