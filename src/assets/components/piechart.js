import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Sample data
  const data = {
    labels: ["Very Satsified", "Satsified", "Neither", "Dissatsified", "Very Dissatsiffied"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9C27B0",
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

export default PieChart;
