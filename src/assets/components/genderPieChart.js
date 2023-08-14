import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderPieChart = () => {
  const [genderData, setGenderData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/users')
      .then((response) => {
        const data = response.data;

        // count the genders
        const genderCount = data.reduce((count, user) => {
          const gender = user.gender.toLowerCase();
          count[gender] = (count[gender] || 0) + 1;
          return count;
        }, {});

        // Update the state with the new data
        setGenderData({
          labels: ["Male", "Female"],
          datasets: [
            {
              data: [genderCount.male || 0, genderCount.female || 0],
              backgroundColor: [
                "#36A2EB",
                "#FF6384",
              ],
            },
          ],
        });
      })
      .catch((error) => console.error('Error fetching users data:', error));
  }, []);

  if (!genderData) {
    return <p>Loading...</p>;
  }

  return (
    <Pie
      data={genderData}
      width={300}
      height={300}
      options={{ maintainAspectRatio: false }}
    />
  );
};

export default GenderPieChart;
