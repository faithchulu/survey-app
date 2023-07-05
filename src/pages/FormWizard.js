import React, { useState } from "react";

const FormWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        {" "}
        How frequently do you visit our supermarket?
      </h2>
      <div>
        <fieldset className="mt-6">
          <legend className="text-sm font-semibold leading-6 text-gray-900">
            How frequently do you visit our supermarket?
          </legend>

          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input
                id="never"
                name="never"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="never"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Never
              </label>
            </div>

            <div className="flex items-center gap-x-3">
              <input
                id="rarely"
                name="rarely"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="rarely"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rarely
              </label>
            </div>

            <div className="flex items-center gap-x-3">
              <input
                id="sometimes"
                name="sometimes"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="sometimes"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sometimes
              </label>
            </div>

            <div className="flex items-center gap-x-3">
              <input
                id="often"
                name="often"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="often"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Often
              </label>
            </div>

            <div className="flex items-center gap-x-3">
              <input
                id="always"
                name="always"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="always"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Always
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Next
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 2: Account Information</h2>
      <div>
        <label className="block text-gray-700">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handlePrevious}
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );

const renderStep3 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Step 3: Account Information</h2>
      <div>
        <label className="block text-gray-700">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>
      <div>
        <label className="block text-gray-700">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handlePrevious}
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );

const renderStep4 = () => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">Step 4: Account Information</h2>
    <div>
      <label className="block text-gray-700">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md w-full"
      />
    </div>
    <div>
      <label className="block text-gray-700">Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md w-full"
      />
    </div>
    <div className="flex space-x-4">
      <button
        onClick={handlePrevious}
        className="bg-gray-500 text-white px-4 py-2 rounded-md"
      >
        Previous
      </button>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </div>
  </div>
);


  return (
    <div className="max-w-md mx-auto p-4">
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
    </div>
  );
};

export default FormWizard;
