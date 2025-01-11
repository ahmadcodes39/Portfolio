import express from "express";
import contact from "../Models/ContactModel.js";
import { body, validationResult } from "express-validator";

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

router.post("/ContactformData", validate, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(err => ({
          field: err.param, // Field where the error occurred
          Error: err.msg, // Error message for that field
        }));
      
        return res.status(400).json({
         
          errors: errorMessages, 
        });
      }
      

    const { name, email, message } = req.body;

    const newContact = await contact.create({
      name,
      email,
      message,
    });

    res.status(200).json({ message: "Response sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit form", error: error.message });
  }
});

export default router;
