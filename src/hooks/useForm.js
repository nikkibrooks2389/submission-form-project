// hooks/useForm.js
import { useState } from "react";

const useForm = (initialValues, validateFn, onSubmitFn) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus(""); // clear success when typing again
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateFn(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("There were errors in your submission.");
      return;
    }

    setIsLoading(true);
    setStatus("");

    await onSubmitFn(formData, {
      reset: () => setFormData(initialValues),
      done: (message) => setStatus(message || "Form submitted successfully."),
    });

    setIsLoading(false);
  };

  return {
    formData,
    errors,
    isLoading,
    status,
    handleChange,
    handleSubmit,
    setStatus,
  };
};

export default useForm;
