import React, { useState, useEffect } from 'react';

function Statscards() {
  const [totalResponses, setTotalResponses] = useState(0);
  const [averageAge, setAverageAge] = useState(0);

  useEffect(() => {
    // Fetch the data from the endpoint when the component mounts
    fetch('http://localhost:4000/answers')
      .then(response => response.json())
      .then(data => {
        // Set the total number of answers as totalResponses
        setTotalResponses(data.length);
      })
      .catch(error => {
        console.error("There was an error fetching the answers:", error);
      });

    // Fetch the data from the users endpoint to calculate average age
    fetch('http://localhost:4000/users')
      .then(response => response.json())
      .then(data => {
        // Calculate the average age from the user data
        const ages = data.filter(user => user.role === 'respondent').map(user => parseInt(user.age, 10));
        const totalAge = ages.reduce((total, age) => total + age, 0);
        const average = totalAge / ages.length;
        setAverageAge(average.toFixed(2)); // Set the average age with two decimal places
      })
      .catch(error => {
        console.error("There was an error fetching the users:", error);
      });
  }, []);  // The empty dependency array ensures this useEffect runs once when the component mounts

  const stats = [
    { name: 'Total Responses', stat: totalResponses.toString() },
    { name: 'Avg. Response Rate', stat: '58.16%' },
    { name: 'Avg. Respondent Age', stat: averageAge },  // Use the state variable here
  ];

  return (
    <div className="p-6">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Last 30 days
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-xl sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default Statscards;
