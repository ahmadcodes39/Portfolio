import React, { useState, useEffect } from "react";
import "../.././App.css";
import { IoIosSend } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContactFormSubmission } from "../Routes/ApiRoutes";

const Contact_RightPanel = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);  // Loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true when submission starts
    await ContactFormSubmission(formData, setIsSuccess, setLoading);  // Pass setLoading to handle loading state
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <form
      onSubmit={sendMessage}
      className="flex flex-col justify-center bg-gray-800 rounded-lg shadow-lg w-full lg:w-[80%] p-6"
      data-aos="fade-right"
      data-aos-delay="500"
    >
      <label className="text-white text-lg font-semibold mb-2">Full Name</label>
      <input
        type="text"
        className="p-2 mb-4 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Enter your name"
        onChange={handleChange}
        name="name"
        required
        value={formData.name}
      />

      <label className="text-white text-lg font-semibold mb-2">Email</label>
      <input
        type="email"
        className="p-2 mb-4 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Enter your email"
        onChange={handleChange}
        name="email"
        required
        value={formData.email}
      />

      <label className="text-white text-lg font-semibold mb-2">Message</label>
      <textarea
        className="p-2 mb-4 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Enter your message"
        rows="4"
        onChange={handleChange}
        name="message"
        required
        value={formData.message}
      />

      <button
        type="submit"
        className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-all flex gap-3 justify-center items-center"
        disabled={loading} 
      >
        {loading ? (
          <span>Sending...</span>  
        ) : (
          <>
            Let's Talk
            <IoIosSend className="transform hover:rotate-360" />
          </>
        )}
      </button>
    </form>
  );
};

export default Contact_RightPanel;
