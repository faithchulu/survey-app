import React, { useState } from 'react';

const FormCreator = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([
    { type: 'paragraph', question: '' },
  ]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleQuestionChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index].question = e.target.value;
    setQuestions(newQuestions);
  };

  const handleQuestionTypeChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index].type = e.target.value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    const newQuestions = [...questions, { type: 'paragraph', question: '' }];
    setQuestions(newQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleCreateForm = () => {
    // Code to handle the form creation logic
    console.log('Form created!');
  };

  return (
    <div className="container mx-auto py-8 flex justify-center">
    <div className="w-full max-w-lg">
      <h1 className="text-3xl font-bold mb-4">Create Form</h1>

      <div className="mb-4">
        <label htmlFor="title" className="block font-bold mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-300 rounded px-4 py-2 w-full"
          value={title}
          onChange={handleTitleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-bold mb-1">
          Description
        </label>
        <textarea
          id="description"
          className="border border-gray-300 rounded px-4 py-2 w-full"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>

      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center mb-2">
            <label className="font-bold mr-2">Question {index + 1}:</label>
            <select
              className="border border-gray-300 rounded px-2 py-1"
              value={question.type}
              onChange={(e) => handleQuestionTypeChange(index, e)}
            >
              <option value="paragraph">Paragraph</option>
              <option value="multipleChoice">Multiple Choice</option>
            </select>
            <button
              className="ml-2 text-red-600 font-bold"
              onClick={() => handleRemoveQuestion(index)}
            >
              Remove
            </button>
          </div>

          {question.type === 'paragraph' ? (
            <textarea
              className="border border-gray-300 rounded px-4 py-2 w-full"
              value={question.question}
              onChange={(e) => handleQuestionChange(index, e)}
            />
          ) : (
            <>
              <input
                type="text"
                className="border border-gray-300 rounded px-4 py-2 w-full mb-2"
                placeholder="Question"
                value={question.question}
                onChange={(e) => handleQuestionChange(index, e)}
              />

              {[...Array(5)].map((_, optionIndex) => (
                <div key={optionIndex} className="flex items-center mb-2">
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-2 py-1"
                    placeholder={`Option ${optionIndex + 1}`}
                 />
                </div>
              ))}
            </>
          )}
        </div>
      ))}

      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2"
          onClick={handleAddQuestion}
        >
          Add Question
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white rounded px-4 py-2"
          onClick={handleCreateForm}
        >
          Create Form
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default FormCreator;
