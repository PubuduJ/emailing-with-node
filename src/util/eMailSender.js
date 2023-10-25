const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, message) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    await transporter.sendMail({
        from: `Node Backend <pubudujanith.dep9@gmail.com>`,
        to: `${email}`,
        subject: `${subject}`,
        text: `${message}`
    })
}

module.exports = sendEmail;