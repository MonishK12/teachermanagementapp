import nodemailer from "nodemailer";

// send mail
export const sendMailNotification = (
  to: string,
  url: string,
  content: string,
  txt: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    secure: true,
    port: 465,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_KEY,
    },
  });
  var mailOptions = {
    from: process.env.MAIL_ID,
    to: to,
    subject: "Verify your account",
    html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            ${content}
            
            <a href=${url} style="background: #544af4; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>

            <p>If the button doesn't work for any reason, you can also click on the link below:</p>

            <div>${url}</div>
            </div>
            `,
  };

  transporter.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    return infor;
  });
};
