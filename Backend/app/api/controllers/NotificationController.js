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

  pushNotification: function(request, response) {
    var param = request.allParams();

    const notificationPayload = {
      notification: {
        title: 'New Notification',
        body: 'This is the body of the notification',
      }
    }


    const promises = []
    console.log("Hii");
    promises.push(webPush.sendNotification(request.body.notification, JSON.stringify(notificationPayload)).catch(err => console.error(err)));
    Promise.all(promises).then(() => {
      console.log("Hii1");
      return response.status(200).json({
        message: "Notification pushed Sucessfully"
      })
    });
  }
};