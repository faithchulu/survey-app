import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the JSON file
    postData();
  };

  const postData = async () => {
    try {
      const response = await fetch("../DB/db.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data was successfully posted
        console.log("Form data posted successfully");
      } else {
        // Handle the error if data posting fails
        console.log("Error posting form data");
      }
    } catch (error) {
      console.error("Error posting form data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
          />
          
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      ></textarea>
      <button type="submit bg-black p-4">Submit</button>
    </form>
  );
};

export default FormComponent;