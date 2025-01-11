import axios from "axios";
import toast from "react-hot-toast";

export const ContactFormSubmission = async (formData,setIsSuccess,setLoading) => {
  const { name, email, message } = formData;
  try {
    const response = await axios.post("/api/ContactformData", {
      name,
      email,
      message,
    });

    if (response.status === 200) {
      toast.success(response.data.message);
      setIsSuccess(true);
    }

  } catch (error) {
    // General error handling
    const errorMessage = error.response?.data?.message || error.message;

    // If status 400, handle validation errors
    if (error.response?.status === 400) {
      const errors = error.response.data.errors;
      errors.forEach((err) => {
        const [field, Error] = Object.entries(err)[0]; // Extract field and message
        toast.error(`${field}: ${Error}`); // Show individual field error
      });
    } else {
      toast.error(errorMessage); // Show general error if not a validation issue
    }
  }
  finally {
    setLoading(false);  // Set loading to false after processing is complete
  }
};
