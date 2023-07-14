import React, { useState } from "react";

const FormCreator = () => {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveyDescription, setSurveyDescription] = useState("");
  const [questions, setQuestions] = useState([]);

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
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Survey</h1>

      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="survey-title">
          Survey Title
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          id="survey-title"
          value={surveyTitle}
          onChange={(e) => setSurveyTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
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
        <div key={index} className="mb-4">
          <label className="block mb-2 font-bold">Question {index + 1}</label>
          <div className="flex mb-2">
            <select
              className="w-1/2 px-4 py-2 border border-gray-300 rounded mr-2"
              value={question.type}
              onChange={(e) => handleQuestionTypeChange(index, e.target.value)}
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
            value={question.question}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
          ></textarea>
          {question.type === "multiple-choice" && (
            <div>
              {question.options.map((option, optionIndex) => (
                <input
                  key={optionIndex}
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
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleAddQuestion}
        >
          Add Question
        </button>
      </div>

      <div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4">
          Create Form
        </button>
      </div>
    </div>
  );
};

export default FormCreator;
