import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SideNav from "../../assets/components/SideNav";

export default function SurveyDetails() {
  const { id } = useParams(); // Extract the survey ID from URL parameters
  const [survey, setSurvey] = useState(null);
  const [questions, setQuestions] = useState([]);

  // Fetch the specific survey and its questions when the component mounts
  useEffect(() => {
    const getSurvey = async () => {
      try {
        const surveyResponse = await axios.get(`http://localhost:4000/surveys/${id}`);
        const questionsResponse = await axios.get(`http://localhost:4000/questions?surveyId=${id}`);
        setSurvey(surveyResponse.data);
        setQuestions(questionsResponse.data);
      } catch (error) {
        console.error("Error fetching survey details", error);
      }
    };

    getSurvey();
  }, [id]);

  if (!survey) {
    return "Loading...";
  }

  return (
    <div>
      <SideNav>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h1 className="text-3xl font-bold mb-4">{survey.title}</h1>
            <p className="text-gray-700 mb-4">{survey.description}</p>
            
            {questions.map((question) => (
              <div key={question.id} className="mb-6 bg-gray-100 p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
                
                {question.options && question.options.map((option, index) => (
                  <p key={index} className="text-gray-600">{option}</p>
                ))}
                
              </div>
            ))}
          </div>

      </SideNav>
    </div>
  );
}
