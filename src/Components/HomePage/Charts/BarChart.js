import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { BarGraphData } from "../../../Data/ChartData";

function BarChart() {
  const [userData, setUserData] = useState({
    labels: BarGraphData.map((data) => data.month),
    datasets: [
      {
        label: "Revenue",
        data: BarGraphData.map((data) => data.revenue),
        backgroundColor: [
          "#0275d8"
        ],
        borderWidth: 2,
      },
    ],
  });
  return <Bar data={userData} />;
}

export default BarChart;
