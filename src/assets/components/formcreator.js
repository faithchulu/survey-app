import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import axios from "axios";

const FormCreator = () => {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveyDescription, setSurveyDescription] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleSubmit = async () => {
    // assuming username is available in your context
    const username = "Some Username"; 

    // Create survey object
    const survey = {
      username,
      title: surveyTitle,
      description: surveyDescription,
      creationDate: new Date().toLocaleDateString(),
    };

    try {
      // Send POST request to create a new survey
      const surveyResponse = await axios.post('http://localhost:4000/surveys', survey);

      // Iterate through each question and send a POST request to create a new question for the survey
      for (const question of questions) {
        const newQuestion = {
          ...question,
          surveyId: surveyResponse.data.id,
        };

        await axios.post('http://localhost:4000/questions', newQuestion);
      }
        alert("Survey Created sucessfully!");
       // Reset the form
       setSurveyTitle("");
       setSurveyDescription("");
       setQuestions([]);
     } catch (error) {
       console.error("Error creating survey", error);
     }
   };
  


  const handleAddQuestion = () => {
    setQuestions([...questions, { type: "paragraph", options: [""] }]);
  };

  const handleQuestionTypeChange = (index, type) => {
    const updatedQuestions = [...questions];
    if (type === "paragraph") {
      updatedQuestions[index] = { type: "paragraph", options: [""] };
    } else if (type === "multiple-choice") {
      updatedQuestions[index] = {
        type: "multiple-choice",
        options: ["", "", "", "", ""],
      };
    }
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (index, question) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = question;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="max-w-xl mx-auto ">
    
        <h1 className="text-3xl font-bold mb-4">Create Survey</h1>

        <div className="p-6 bg-white shadow-md rounded-xl">
          <label className="block mb-2 font-bold" htmlFor="survey-title">
            Survey Title:
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            id="survey-title"
            placeholder="Enter your survey title here."
            value={surveyTitle}
            onChange={(e) => setSurveyTitle(e.target.value)}
          />
        </div>

        <div className="p-6 bg-white mt-6 mb-6 shadow-md rounded-xl">
          <label className="block mb-2 font-bold" htmlFor="survey-description">
            Survey Description
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded"
            id="survey-description"
            value={surveyDescription}
            onChange={(e) => setSurveyDescription(e.target.value)}
          ></textarea>
        </div>

        {questions.map((question, index) => (
          <div key={index} className="mb-6 bg-white rounded-xl shadow-md p-6">
            <label className="block mb-2 font-bold">Question {index + 1}</label>
            <div className="flex mb-2">
              <select
                className="w-1/2 px-4 py-2 border border-gray-300 rounded mr-2"
                value={question.type}
                onChange={(e) =>
                  handleQuestionTypeChange(index, e.target.value)
                }
              >
                <option value="paragraph">Paragraph</option>
                <option value="multiple-choice">Multiple Choice</option>
              </select>
              <button
                className="text-red-500 underline"
                onClick={() =>
                  setQuestions(questions.filter((_, i) => i !== index))
                }
              >
                Remove Question
              </button>
            </div>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded mb-2"
              placeholder="Enter the question text here"
              value={question.question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
            ></textarea>
            {question.type === "multiple-choice" && (
              <div>
                {question.options.map((option, optionIndex) => (
                  <input
                    key={optionIndex}
                    placeholder="Enter option here"
                    className="w-full mb-2 px-4 py-2 border border-gray-300 rounded"
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(index, optionIndex, e.target.value)
                    }
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        <div>
          <button
            className="px-4 py-2 bg-black text-white rounded"
            onClick={handleAddQuestion}
          >
            <PlusIcon className="h-2" />
            Add Question
          </button>
        </div>

        <div>
          <button
        
            className="px-4 py-2 bg-indigo-500 text-white rounded mt-4"
            onClick={handleSubmit}
          >
            Create Form
          </button>
        </div>
      
    </div>
  );
};

export default FormCreator;
