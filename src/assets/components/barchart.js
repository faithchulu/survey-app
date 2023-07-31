import React from "react";
import { Bar } from "react-chartjs-2";

import { Chart as ChartJS, BarElement } from "chart.js";

ChartJS.register(BarElement);


const BarChart = () => {
  // Chart data
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Data",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "blue",
      },
    ],
  };

  return (
    <div className="w-full h-64">
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;