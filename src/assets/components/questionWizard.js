import React, { useState } from "react";
import axios from "axios";

const QuestionWizard = () => {
  const [formData, setFormData] = useState({
    questionId: "",
    answerText: "",
    optionId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_JSON_SERVER_URL' with the actual URL of your JSON server endpoint
      const response = await axios.post(
        "http://localhost:3031/answers/answers",
        {
          ...formData,
          submissionDate: new Date().toISOString(), // Add the current date as submissionDate
        }
      );

      console.log("Form data posted successfully:", response.data);

      // Clear form data after successful submission (optional)
      setFormData({
        questionId: "",
        answerText: "",
        optionId: "",
      });
    } catch (error) {
      console.error("Error posting form data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="questionId"
        value={formData.questionId}
        onChange={handleChange}
        placeholder="Question ID"
      />
      <input
        type="text"
        name="answerText"
        value={formData.answerText}
        onChange={handleChange}
        placeholder="Answer Text"
      />
      <input
        type="text"
        name="optionId"
        value={formData.optionId}
        onChange={handleChange}
        placeholder="Option ID"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionWizard;
