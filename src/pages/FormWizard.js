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
      <h2 className="text-xl font-semibold">
        How satisfied are you with the overall shopping experience at our
        supermarket?
      </h2>
      <fieldset className="mt-6">

        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="very-satisfied"
              name="satisifaction"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="very-satisfied"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Very satisfied
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="satisfied"
              name="satisifaction"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="satisfied"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              satisfied
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="neither"
              name="satisifaction"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="neither"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Neither satisfied or Dissatisfied
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="dissatisfied"
              name="satisifaction"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="dissatisfied"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Dissatisfied
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="very-dissatisfied"
              name="satisifaction"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="very-dissatisfied"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Very Dissatisfied
            </label>
          </div>
        </div>
      </fieldset>
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
        
      </div>
    </div>
  );


  const renderStep3 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        What factors influence your decision to shop at our supermarket? (Select
        all that apply)
      </h2>
      <fieldset className="mt-6">
        

        <div className="mt-6 space-y-6">
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="convenient-location"
                name="convenient-location"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="convenient-location"
                className="font-medium text-gray-900"
              >
                Convenient Location
              </label>
            </div>
          </div>

          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="competitive-prices"
                name="competitive-prices"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="competitive-prices"
                className="font-medium text-gray-900"
              >
                Competitive Prices
              </label>
            </div>
          </div>

          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="wide-selection-of-products"
                name="wide-selection-of-products"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="wide-selection-of-products"
                className="font-medium text-gray-900"
              >
                Wide selection of products
              </label>
            </div>
          </div>

          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="quality-of-products"
                name="quality-of-products"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="quality-of-products"
                className="font-medium text-gray-900"
              >
                Quality of products
              </label>
            </div>
          </div>

          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="friendly-and-helpful-staff"
                name="friendly-and-helpful-staff"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="friendly-and-helpful-staff"
                className="font-medium text-gray-900"
              >
                Friendly and helpful staff
              </label>
            </div>
          </div>

          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="clean-and-well-maintained-store"
                name="clean-and-well-maintained-store"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="clean-and-well-maintained-store"
                className="font-medium text-gray-900"
              >
                Clean and well maintained store
              </label>
            </div>
          </div>

          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="promotional-offers-and-discounts"
                name="promotional-offers-and-discounts"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="promotional-offers-and-discounts"
                className="font-medium text-gray-900"
              >
                Promotional offers and discounts
              </label>
            </div>
          </div>
        </div>
      </fieldset>

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
      </div>
    </div>
  );

  
const renderStep4 = () => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">
      How would you rate the cleanliness and organization of our supermarket?
    </h2>
    <fieldset className="mt-6">

      <div className="mt-6 space-y-6">
        <div className="flex items-center gap-x-3">
          <input
            id="very-clean"
            name="very-clean"
            type="radio"
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="very-clean"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Very clean
          </label>
        </div>

        <div className="flex items-center gap-x-3">
          <input
            id="clean"
            name="clean"
            type="radio"
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="clean"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Clean
          </label>
        </div>

        <div className="flex items-center gap-x-3">
          <input
            id="dirty"
            name="dirty"
            type="radio"
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="dirty"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Dirty
          </label>
        </div>

        <div className="flex items-center gap-x-3">
          <input
            id="very-dirty"
            name="very-dirty"
            type="radio"
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="very-dirty"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Very Dirty
          </label>
        </div>
      </div>
    </fieldset>

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
    </div>
  </div>
);

   
const renderStep5 = () => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">
      Are there any specific products or brands that you would like to see in
      our supermarket?
    </h2>
    <div>
    <input
        type="text"
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
    </div>
  </div>
);

const renderStep6 = () => (
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
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Next
      </button>
    </div>
  </div>
);

  
const renderStepN = () => (
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
      {step === 5 && renderStep5()}
      {step === 10 && renderStepN()}
    </div>
  );
};

export default FormWizard;
