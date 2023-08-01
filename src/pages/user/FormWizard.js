import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FormWizard = () => {
  const { surveyId } = useParams();  // ...other state and effect hooks...
  
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(1);
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3031/questions?surveyId=" + surveyId);
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions", error);
      }
    };

    fetchQuestions();
  }, [surveyId]);

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    // TODO: implement the form submission logic here
    console.log('Form Submitted');
  };

  const renderStep = (step) => {
    if (step > questions.length) return null;
  
    const question = questions[step - 1];
    
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">{question.question}</h2>
        {question.options && question.options.map((option, index) => (
          <p key={index} className="text-sm text-gray-600">{option}</p>
        ))}
        <div className="flex justify-between">
          {step > 1 && <button onClick={handlePrevious} className="bg-gray-500 text-white px-4 py-2 rounded-md">Previous</button>}
          {step < questions.length ? (
            <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
          ) : (
            <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
          )}
        </div>
      </div>
    );
  };
  

  return (
    <div>
      {/*...*/}
      {renderStep(step)}
      {/*...*/}
    </div>
  );
};

export default FormWizard;