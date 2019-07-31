/**
 * ListDiscussionController
 *
 * @description :: Contoller to fetch list of discussions
 * @author      :: Sharmila Thirumalainathan (B00823668)
 */

const webPush = require('web-push');
const publicKey = 'BHddeLLJNV7FYImxP8-1u_mvcGo6N70ZXCRW2UtZbeKiuwLlo5fyaFJR8BIr8gbWCnWqHJ7x7DrL98zS14ZJkew';
const privateKey = 'R2K-IXm-uZbLmc2y77p6M8uhEqdbHeTk0AkWQtMomfo';

webPush.setVapidDetails("mailto:test@test.com", publicKey, privateKey);

module.exports = {

  pushNotification: async function(request, response) {
    var param = request.allParams();


    var param = request.allParams();

    if (!param.email) {
      return response.status(200).json({
        message: "No user found"
      });
    }

    var subscriber = await Subscriber.findOne({
      email: request.body.email
    });

    console.log("Hii");

    if (!subscriber) {
      await Subscriber.create({
        email: request.body.email
      });
      return response.status(200).json({
        message: "Subscribed Sucessfully"
      })
    }


    const promises = []

    await WebNotification.find({
      email: request.body.email
    }).exec(function(err, results) {
      results.forEach((result) => {
        var notificationPayload = {
          notification: {
            title: result.title,
            body: result.body
          }
        }
        console.log("Hii");
        promises.push(webPush.sendNotification(request.body.notification, JSON.stringify(notificationPayload)).catch(err => console.error(err)));
      })

    });

    await WebNotification.destroy({
      email: request.body.email
    });

    Promise.all(promises).then(() => {
      return response.status(200).json({
        message: "Notification pushed Sucessfully"
      })
    });
  }
};