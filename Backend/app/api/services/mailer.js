/**
 * mailer.js
 *
 * @description :: Mailer logic for triggering e-mail.
 * @author      :: Sharmila Thirumalainathan, B00823668
 *
 */



module.exports.sendResetPwdMail = function(obj) {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

  // Binds the user data dynamically to email template.
  sails.hooks.email.send(
    "resetpwd", {
      Name: obj.name,
      Url: obj.url
    }, {
      to: obj.email,
      subject: "Password Reset - Reg"
    },
    function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("It worked!");
      }
    }
  )
};