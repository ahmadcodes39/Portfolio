import express from "express";
import contact from "../Models/ContactModel.js";
import { body, validationResult } from "express-validator";
import nodemailer from "nodemailer"
const router = express.Router();

const validate = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),
  body("email")
    .isEmail()
    .withMessage("Email must be valid")
    .custom(async (email) => {
      const existingEmail = await contact.findOne({ email });
      if (existingEmail) {
        throw new Error("Email is already in use");
      }
      return true;
    }),
  body("message")
    .isLength({ min: 3, max: 500 })
    .withMessage("Message length should be between 3 to 500 characters"),
];

// router.post("/ContactformData", validate, async (req, res) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       const errorMessages = errors.array().map((err) => ({
//         field: err.param, // Field where the error occurred
//         Error: err.msg, // Error message for that field
//       }));

//       return res.status(400).json({
//         errors: errorMessages,
//       });
//     }

//     const { name, email, message } = req.body;

//     const newContact = await contact.create({
//       name,
//       email,
//       message,
//     });

//     res.status(200).json({ message: "Response sent successfully!" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to submit form", error: error.message });
//   }
// });

router.post("/send-emailRecipent", (req, res) => {
  const { userName , emailTo } = req.body; 

  if (!emailTo) {
    return res.status(400).send("Recipient email address is required");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_MAIL,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MY_MAIL,
    to: emailTo, 
    subject: "Great to Have You Here - Let's Connect!",
    html: `
      <h1 style="color: #1e3a8a;">Thanks for Visiting My Portfolio!</h1>
      <p>Hello,${userName}</p>
      <p>Thank you for visiting my portfolio! I am excited to have you here and would love to connect with you. Feel free to explore my projects, blog posts, and reach out to me for collaborations or inquiries.</p>
      <p>Looking forward to working with you!</p>
      <p>Best regards,<br>Ahmad Ali Shah</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).send("Email sent successfully");
    }
  });
});

router.post("/send-emailAdmin", (req, res) => {
  const emailTo = process.env.ADMIN_EMAIL;
  const { name, email, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).send("All fields (name, email, message) are required");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_MAIL,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MY_MAIL,
    to: emailTo, // Ensure this is populated from the environment variable
    subject: "New Interaction on Your Portfolio!",
    html: `
      <h1 style="color: #1e3a8a;">Someone Just Visited Your Portfolio!</h1>
      <p>Hello Ahmad Ali Shah,</p>
      <p>You've just had a visitor on your portfolio! A user has interacted with your portfolio and shown interest in connecting.</p>
      <p><strong>User's Name:</strong> ${name}</p>
      <p><strong>User's Email:</strong> ${email}</p>
      <p><strong>User's Message:</strong> ${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).send("Email sent successfully");
    }
  });
});


export default router;
