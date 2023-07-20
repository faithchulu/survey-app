import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const GenderPieChart = () => {
  // Sample data
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [12, 23],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          
        ],
      },
    ],
  };

  return (
    <Pie
      data={data}
      width={300}
      height={300}
      options={{ maintainAspectRatio: false }}
      
    />
  );
};

export default GenderPieChart;
