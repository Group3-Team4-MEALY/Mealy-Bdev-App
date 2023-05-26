import nodemailer from"nodemailer";
import dotenv from "dotenv"

const sendEmail = async (email, subject, text) => {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.STAGING_EMAIL_HOST,
        service: process.env.SERVICE,
        port: 587,
        secure: false,
        debug: true,
        auth: {
          user: process.env.STAGING_EMAIL_USER,
          pass: process.env.STAGING_USER_PASSWORD,
        },
        from: process.env.STAGING_EMAIL_USER,
      });
  
      transporter.sendMail(
        {
          from: process.env.STAGING_EMAIL_USER,
          to: email,
          subject: subject,
          text: text
                },
                (error, info) => {
                  if (error) {
                    console.error("Error sending email:", error);
                  } else {
                    console.log("Email sent successfully:", info.response);
                  }
                }
              );
            } catch (error) {
              console.log(error, "email not sent");
            }
          };
          
          export default sendEmail;


// const mailData = {
//   from: 'dmnion.4glowd@gmail.com',  // sender address
//   to: 'estelas.com@gmail.com',   // list of receivers
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!',
//   html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
// };

// export { mailData };