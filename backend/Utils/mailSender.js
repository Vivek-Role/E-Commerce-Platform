import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "E-commerce App by Amit Bhagat",
      to: email,
      subject: title,
      html: body,
    });

    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

export default mailSender;
