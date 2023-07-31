// src/QuestionWizard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const QuestionWizard = () => {
  const [questions, setQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = questions.length;

  useEffect(() => {
    // Fetch questions from the JSON server (replace 'YOUR_JSON_SERVER_URL' with the actual URL)
    axios.get("http://localhost:3031/questions").then((response) => {
      setQuestions(response.data.questions);
    });
  }, []);

  // Function to move to the next step
  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  // Function to move to the previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  // Function to handle form submission
  const handleSubmit = (formData) => {
    // Handle form submission with collected data
    console.log("Form data:", formData);
  };

  // Function to render the current step/question
  const renderStep = () => {
    const currentQuestion = questions[currentStep - 1];
    switch (currentQuestion.type) {
      case "text":
        return (
          <input
            type="text"
            placeholder="Type your answer here..."
            // Implement your onChange event handler to collect the user's input
          />
        );
      case "checkbox":
        return (
          <div>
            {currentQuestion.options.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={option}
                  // Implement your onChange event handler to collect the user's selections
                />
                {option}
              </label>
            ))}
          </div>
        );
      case "radio":
        return (
          <div>
            {currentQuestion.options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={`radio-${currentQuestion.id}`}
                  value={option}
                  // Implement your onChange event handler to collect the user's selection
                />
                {option}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Form Wizard</h1>
      <div>{renderStep()}</div>
      <div>
        <button onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </button>
        {currentStep < totalSteps ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={() => handleSubmit()}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default QuestionWizard;