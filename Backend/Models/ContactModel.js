import mongoose, { model } from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const contact = mongoose.model("ContactForm", contactSchema);
export default contact;