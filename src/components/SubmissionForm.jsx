import { useState, useEffect } from "react";

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({})

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = handleValidation()
    setErrors(validationErrors)
    console.log(formData);
  };

  useEffect(() => {
    console.log("formData change", formData);
  }, [formData]);

  const handleValidation = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "name is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    return errors
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleFormData}
        placeholder="Name"
        name="name"
        value={formData.name}
      />
{errors.name && <p style={{color:"red"}}>{errors.name}</p>}
      <input
        type="email"
        onChange={handleFormData}
        placeholder="Email"
        name="email"
        value={formData.email}
      />
      {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
      <textarea
        onChange={handleFormData}
        placeholder="Message"
        name="message"
        value={formData.message}
      />
      {errors.message && <p style={{color:"red"}}>{errors.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmissionForm;
