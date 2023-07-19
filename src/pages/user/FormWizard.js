import QuestionWizard from "../../assets/components/questionWizard";

export default function FormWizard() {
  return (
    <div>
      <QuestionWizard/>
    </div>
  )
}

// import React, { useState } from "react";
// import NavBar from "../../assets/components/navbar";
// import Footer from "../../assets/components/footer";

// const FormWizard = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handlePrevious = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   const renderStep1 = () => (
//     <div className="space-y-4 text-white">
//       <h2 className="text-xl font-semibold text-white">
//         How frequently do you visit our supermarket?
//       </h2>
//       <div>
//         <fieldset className="mt-6 text-white">
//           <legend className="text-sm font-semibold leading-6 ">
//             How frequently do you visit our supermarket?
//           </legend>

//           <div className="mt-6 space-y-6 text-white">
//             <div className="flex text-white items-center text-white gap-x-3">
//               <input
//                 id="never"
//                 name="never"
//                 type="radio"
//                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//               <label
//                 htmlFor="never"
//                 className="block text-sm font-medium leading-6"
//               >
//                 Never
//               </label>
//             </div>

//             <div className="flex items-center gap-x-3">
//               <input
//                 id="rarely"
//                 name="rarely"
//                 type="radio"
//                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//               <label
//                 htmlFor="rarely"
//                 className="block text-sm font-medium leading-6 text-white"
//               >
//                 Rarely
//               </label>
//             </div>

//             <div className="flex items-center gap-x-3">
//               <input
//                 id="sometimes"
//                 name="sometimes"
//                 type="radio"
//                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//               <label
//                 htmlFor="sometimes"
//                 className="block text-sm font-medium  leading-6 text-white"
//               >
//                 Sometimes
//               </label>
//             </div>

//             <div className="flex items-center gap-x-3">
//               <input
//                 id="often"
//                 name="often"
//                 type="radio"
//                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//               <label
//                 htmlFor="often"
//                 className="block text-sm font-medium leading-6 text-white"
//               >
//                 Often
//               </label>
//             </div>

//             <div className="flex items-center gap-x-3">
//               <input
//                 id="always"
//                 name="always"
//                 type="radio"
//                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//               <label
//                 htmlFor="always"
//                 className="block text-sm font-medium leading-6 text-white"
//               >
//                 Always
//               </label>
//             </div>
//           </div>
//         </fieldset>
//       </div>

//       <button
//         onClick={handleNext}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//       >
//         Next
//       </button>
//     </div>
//   );

//   const renderStep2 = () => (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">
//         How satisfied are you with the overall shopping experience at our
//         supermarket?
//       </h2>
//       <fieldset className="mt-6">

//         <div className="mt-6 space-y-6">
//           <div className="flex items-center gap-x-3">
//             <input
//               id="very-satisfied"
//               name="satisifaction"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="very-satisfied"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Very satisfied
//             </label>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <input
//               id="satisfied"
//               name="satisifaction"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="satisfied"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               satisfied
//             </label>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <input
//               id="neither"
//               name="satisifaction"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="neither"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Neither satisfied or Dissatisfied
//             </label>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <input
//               id="dissatisfied"
//               name="satisifaction"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="dissatisfied"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Dissatisfied
//             </label>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <input
//               id="very-dissatisfied"
//               name="satisifaction"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="very-dissatisfied"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Very Dissatisfied
//             </label>
//           </div>
//         </div>
//       </fieldset>
//       <div className="flex space-x-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-500 text-white px-4 py-2 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Next
//         </button>
        
//       </div>
//     </div>
//   );


//   const renderStep3 = () => (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">
//         What factors influence your decision to shop at our supermarket? (Select
//         all that apply)
//       </h2>
//       <fieldset className="mt-6">
        

//         <div className="mt-6 space-y-6">
//           <div className="relative flex gap-x-3">
//             <div className="flex h-6 items-center">
//               <input
//                 id="convenient-location"
//                 name="convenient-location"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="text-sm leading-6">
//               <label
//                 htmlFor="convenient-location"
//                 className="font-medium text-white"
//               >
//                 Convenient Location
//               </label>
//             </div>
//           </div>

//           <div className="relative flex gap-x-3">
//             <div className="flex h-6 items-center">
//               <input
//                 id="competitive-prices"
//                 name="competitive-prices"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="text-sm leading-6">
//               <label
//                 htmlFor="competitive-prices"
//                 className="font-medium text-white"
//               >
//                 Competitive Prices
//               </label>
//             </div>
//           </div>

//           <div className="relative flex gap-x-3">
//             <div className="flex h-6 items-center">
//               <input
//                 id="wide-selection-of-products"
//                 name="wide-selection-of-products"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="text-sm leading-6">
//               <label
//                 htmlFor="wide-selection-of-products"
//                 className="font-medium text-white"
//               >
//                 Wide selection of products
//               </label>
//             </div>
//           </div>

//           <div className="relative flex gap-x-3">
//             <div className="flex h-6 items-center">
//               <input
//                 id="quality-of-products"
//                 name="quality-of-products"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="text-sm leading-6">
//               <label
//                 htmlFor="quality-of-products"
//                 className="font-medium text-white"
//               >
//                 Quality of products
//               </label>
//             </div>
//           </div>

//           <div className="relative flex gap-x-3">
//             <div className="flex h-6 items-center">
//               <input
//                 id="friendly-and-helpful-staff"
//                 name="friendly-and-helpful-staff"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="text-sm leading-6">
//               <label
//                 htmlFor="friendly-and-helpful-staff"
//                 className="font-medium white"
//               >
//                 Friendly and helpful staff
//               </label>
//             </div>
//           </div>

//           <div className="relative flex gap-x-3">
//             <div className="flex h-6 items-center">
//               <input
//                 id="clean-and-well-maintained-store"
//                 name="clean-and-well-maintained-store"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="text-sm leading-6">
//               <label
//                 htmlFor="clean-and-well-maintained-store"
//                 className="font-medium text-white"
//               >
//                 Clean and well maintained store
//               </label>
//             </div>
//           </div>

//           <div className="relative flex gap-x-3">
//             <div className="flex h-6 items-center">
//               <input
//                 id="promotional-offers-and-discounts"
//                 name="promotional-offers-and-discounts"
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//             </div>
//             <div className="text-sm leading-6">
//               <label
//                 htmlFor="promotional-offers-and-discounts"
//                 className="font-medium text-white"
//               >
//                 Promotional offers and discounts
//               </label>
//             </div>
//           </div>
//         </div>
//       </fieldset>

//            <div className="flex space-x-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-500 text-white px-4 py-2 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );

  
// const renderStep4 = () => (
//   <div className="space-y-4">
//     <h2 className="text-xl font-semibold">
//       How would you rate the cleanliness and organization of our supermarket?
//     </h2>
//     <fieldset className="mt-6">

//       <div className="mt-6 space-y-6">
//         <div className="flex items-center gap-x-3">
//           <input
//             id="very-clean"
//             name="very-clean"
//             type="radio"
//             className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//           />
//           <label
//             htmlFor="very-clean"
//             className="block text-sm font-medium leading-6 text-white"
//           >
//             Very clean
//           </label>
//         </div>

//         <div className="flex items-center gap-x-3">
//           <input
//             id="clean"
//             name="clean"
//             type="radio"
//             className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//           />
//           <label
//             htmlFor="clean"
//             className="block text-sm font-medium leading-6 text-white"
//           >
//             Clean
//           </label>
//         </div>

//         <div className="flex items-center gap-x-3">
//           <input
//             id="dirty"
//             name="dirty"
//             type="radio"
//             className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//           />
//           <label
//             htmlFor="dirty"
//             className="block text-sm font-medium leading-6 text-white"
//           >
//             Dirty
//           </label>
//         </div>

//         <div className="flex items-center gap-x-3">
//           <input
//             id="very-dirty"
//             name="very-dirty"
//             type="radio"
//             className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//           />
//           <label
//             htmlFor="very-dirty"
//             className="block text-sm font-medium leading-6 text-white"
//           >
//             Very Dirty
//           </label>
//         </div>
//       </div>
//     </fieldset>

//     <div className="flex space-x-4">
//       <button
//         onClick={handlePrevious}
//         className="bg-gray-500 text-white px-4 py-2 rounded-md"
//       >
//         Previous
//       </button>
//       <button
//         onClick={handleNext}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//       >
//         Next
//       </button>
//     </div>
//   </div>
// );

   
// const renderStep5 = () => (
//   <div className="space-y-4">
//     <h2 className="text-xl font-semibold">
//       Are there any specific products or brands that you would like to see in
//       our supermarket?
//     </h2>
//     <div>
//       <textarea
//         id="specific-products"
//         name="specific-products"
//         rows="6"
//         class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//       ></textarea>
     
//     </div>
//     <div className="flex space-x-4">
//       <button
//         onClick={handlePrevious}
//         className="bg-gray-500 text-white px-4 py-2 rounded-md"
//       >
//         Previous
//       </button>
//       <button
//         onClick={handleNext}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//       >
//         Next
//       </button>
//     </div>
//   </div>
// );

// const renderStep6 = () => (
//   <div className="space-y-4">
//     <h2 className="text-xl font-semibold">
//       How satisfied are you with the availability of fresh produce in our
//       supermarket?
//     </h2>
//     <fieldset className="mt-6">
      
//       <div className="mt-6 space-y-6">
//         <div className="flex items-center gap-x-3">
//           <input
//             id="very-satisfied"
//             name="satisifaction"
//             type="radio"
//             className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//           />
//           <label
//             htmlFor="very-satisfied"
//             className="block text-sm font-medium leading-6 text-white"
//           >
//             Very satisfied
//           </label>
//         </div>
//         <div className="flex items-center gap-x-3">
//           <input
//             id="satisfied"
//             name="satisifaction"
//             type="radio"
//             className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//           />
//           <label
//             htmlFor="satisfied"
//             className="block text-sm font-medium leading-6 text-white"
//           >
//             satisfied
//           </label>
//         </div>
//         <div className="flex items-center gap-x-3">
//           <input
//             id="neither"
//             name="satisifaction"
//             type="radio"
//             className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//           />
//           <label
//             htmlFor="neither"
//             className="block text-sm font-medium leading-6 text-white"
//           >
//             Neither satisfied or Dissatisfied
//           </label>
//         </div>
//         <div className="flex items-center gap-x-3">
//           <input
//             id="dissatisfied"
//             name="satisifaction"
//             type="radio"
//             className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//           />
//           <label
//             htmlFor="dissatisfied"
//             className="block text-sm font-medium leading-6 text-white"
//           >
//             Dissatisfied
//           </label>
//         </div>
//         <div className="flex items-center gap-x-3">
//           <input
//             id="very-dissatisfied"
//             name="satisifaction"
//             type="radio"
//             className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//           />
//           <label
//             htmlFor="very-dissatisfied"
//             className="block text-sm font-medium leading-6 text-white"
//           >
//             Very Dissatisfied
//           </label>
//         </div>
//       </div>
//     </fieldset>

//     <div className="flex space-x-4">
//       <button
//         onClick={handlePrevious}
//         className="bg-gray-500 text-white px-4 py-2 rounded-md"
//       >
//         Previous
//       </button>
//       <button
//         onClick={handleNext}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//       >
//         Next
//       </button>
//     </div>
//   </div>
// );
  
//   const renderStep7 = () => (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">
//         Do you find our supermarket's pricing to be competitive compared to
//         other supermarkets in the area?
//       </h2>
//       <fieldset className="mt-6">

//         <div className="mt-6 space-y-6">
//           <div className="flex items-center gap-x-3">
//             <input
//               id="yes"
//               name="yes"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="yes"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Yes
//             </label>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <input
//               id="no"
//               name="no"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="no"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               No
//             </label>
//           </div>
//         </div>
//       </fieldset>
//       <div className="flex space-x-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-500 text-white px-4 py-2 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );

  
//   const renderStep8 = () => (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">
//         How likely are you to recommend our supermarket to a friend or family
//         member?
//       </h2>
//       <fieldset className="mt-6">

//         <div className="mt-6 space-y-6">
//           <div className="flex items-center gap-x-3">
//             <input
//               id="likely"
//               name="likely"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="likely"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Likely
//             </label>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <input
//               id="not-likely"
//               name="not-likely"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="not-likely"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Not Likely
//             </label>
//           </div>
//         </div>
//       </fieldset>
//       <div className="flex space-x-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-500 text-white px-4 py-2 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );

//   const renderStep9 = () => (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">
//              What is your preferred payment method when shopping at our supermarket?
//       </h2>
//       <fieldset className="mt-6">
      
//         <div className="mt-6 space-y-6">
//           <div className="flex items-center gap-x-3">
//             <input
//               id="cash"
//               name="cash"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="cash"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Cash
//             </label>
//           </div>

//           <div className="flex items-center gap-x-3">
//             <input
//               id="cards"
//               name="cards"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="cards"
//               className="block text-sm font-medium leading-6 text-whie"
//             >
//               Credit/Debit cards
//             </label>
//           </div>

//           <div className="flex items-center gap-x-3">
//             <input
//               id="mobile"
//               name="mobile"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="mobile"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Mobile payment apps
//             </label>
//           </div>
//         </div>
//       </fieldset>

//       <div className="flex space-x-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-500 text-white px-4 py-2 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );


//   const renderStep10 = () => (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">
//         Are there any improvements or changes you would suggest for our
//         supermarket?
//       </h2>
      
//       <div class="mt-2">
//         <textarea
//           id="improvements"
//           name="improvements"
//           rows="3"
//           class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         ></textarea>
//       </div>

//       <div className="flex space-x-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-500 text-white px-4 py-2 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );

  
//   const renderStep11 = () => (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">
        
//         Would you be interested in participating in a customer loyalty program
//         if one were offered?
//       </h2>
//       <fieldset className="mt-6">
//         <div className="mt-6 space-y-6">
//           <div className="flex items-center gap-x-3">
//             <input
//               id="yes"
//               name="yes"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="yes"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Yes
//             </label>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <input
//               id="no"
//               name="no"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="no"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               No
//             </label>
//           </div>
//         </div>
//       </fieldset>
//       <div className="flex space-x-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-500 text-white px-4 py-2 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );


//   const renderStep12 = () => (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">
//         How would you rate the customer service provided by our supermarket
//         staff?
//       </h2>
//       <fieldset className="mt-6">
//         <div className="mt-6 space-y-6">
//           <div className="flex items-center gap-x-3">
//             <input
//               id="excellent"
//               name="excellent"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="excellent"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Excellent
//             </label>
//           </div>

//           <div className="flex items-center gap-x-3">
//             <input
//               id="good"
//               name="good"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="good"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Good
//             </label>
//           </div>

//           <div className="flex items-center gap-x-3">
//             <input
//               id="okay"
//               name="okay"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="okay"
//               className="block text-sm font-medium leading-6 text-create"
//             >
//               Okay
//             </label>
//           </div>

//           <div className="flex items-center gap-x-3">
//             <input
//               id="bad"
//               name="bad"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="bad"
//               className="block text-sm font-medium leading-6 text-white"
//             >
//               Bad
//             </label>
//           </div>

//           <div className="flex items-center gap-x-3">
//             <input
//               id="poor"
//               name="poor"
//               type="radio"
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="poor"
//               className="block text-sm font-medium leading-6 text-)"
//             >
//               Poor
//             </label>
//           </div>
//         </div>
//       </fieldset>
//       <div className="flex space-x-4">
//         <button
//           onClick={handlePrevious}
//           className="bg-gray-500 text-white px-4 py-2 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );



// const renderStep13 = () => (
//   <div className="space-y-4 text-white">
//     <h2 className="text-xl font-semibold">Last step: Personal Information</h2>
//     <div className="sm:col-span-3">
//       <label
//         htmlFor="first-name"
//         className="block text-sm font-medium leading-6 text-white"
//       >
//         First name
//       </label>
//       <div className="mt-2">
//         <input
//           type="text"
//           name="first-name"
//           id="first-name"
//           placeholder="  First Name"
//           autoComplete="given-name"
//           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         />
//       </div>
//     </div>

//     <div className="sm:col-span-3">
//       <label
//         htmlFor="last-name"
//         className="block text-sm font-medium leading-6 text-white"
//       >
//         Last name
//       </label>
//       <div className="mt-2">
//         <input
//           type="text"
//           name="last-name"
//           id="last-name"
//           placeholder="  Last Name"
//           autoComplete="family-name"
//           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         />
//       </div>
//     </div>

//     <div className="sm:col-span-5">
//       <label
//         htmlFor="email"
//         className="block text-sm font-medium leading-6 text-white"
//       >
//         Email address
//       </label>
//       <div className="mt-2">
//         <input
//           id="email"
//           name="email"
//           type="email"
//           autoComplete="email"
//           placeholder="  Email Address"
//           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         />
//       </div>
//     </div>

//     <div className="sm:col-span-2">
//       <label
//         htmlFor="age"
//         className="block text-sm font-medium leading-6 text-white"
//       >
//         Age
//       </label>
//       <div className="mt-2">
//         <input
//           type="text"
//           name="age"
//           id="age"
//           autoComplete="age"
//           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         />
//       </div>
//     </div>

//     <div className="sm:col-span-2">
//       <label
//         htmlFor="gender"
//         className="block text-sm font-medium leading-6 text-white"
//       >
//         Gender
//       </label>
//       <div className="mt-2">
//         <select
//           id="gender"
//           name="gender"
//           autoComplete="gender"
//           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//         >
//           <option>Male</option>
//           <option>Female</option>
//           <option>I don't wish to say</option>
//         </select>
//       </div>
//     </div>

//     <div className="sm:col-span-2">
//       <label
//         htmlFor="country"
//         className="block text-sm font-medium leading-6 text-white"
//       >
//         Branch
//       </label>
//       <div className="mt-2">
//         <select
//           id="branch"
//           name="branch"
//           autoComplete="branch-name"
//           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//         >
//           <option>Cairo</option>
//           <option>Pinacle</option>
//           <option>Lewanika</option>
//           <option>Kalingalinga</option>
//           <option>Manda Hill</option>
//         </select>
//       </div>
//     </div>

//     <div className="flex space-x-4">
//       <button
//         onClick={handlePrevious}
//         className="bg-gray-500 text-white px-4 py-2 rounded-md"
//       >
//         Previous
//       </button>
//       <button
//         onClick={handleSubmit}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//       >
//         Submit
//       </button>
//     </div>
//   </div>
// );


//   return (
//     <div className="min-h-screen bg-no-repeat bg-cover bg-slate-100">
//       <div className="sticky top-0">
//         <NavBar />
//       </div>{" "}
//       <div className="bg-black text-white mt-6  max-w-md mx-auto p-4">
//         {step === 1 && renderStep1()}
//         {step === 2 && renderStep2()}
//         {step === 3 && renderStep3()}
//         {step === 4 && renderStep4()} 
//         {step === 5 && renderStep5()}
//         {step === 6 && renderStep6()}
//         {step === 7 && renderStep7()}
//         {step === 8 && renderStep8()}
//         {step === 9 && renderStep9()}
//         {step === 10 && renderStep10()}
//         {step === 11 && renderStep11()}
//         {step === 12 && renderStep12()}
//         {step === 13 && renderStep13()}
//       </div>
//       <div className="sticky bottom -5">
//         {" "}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default FormWizard;
