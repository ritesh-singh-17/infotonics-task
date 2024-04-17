import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { PieChartData } from "../../../Data/ChartData";

function PieChart() {
  const [userData, setUserData] = useState({
    labels: PieChartData.map((data) => data.color),
    datasets: [
      {
        label: "Revenue",
        data: PieChartData.map((data) => data.sessions),
        backgroundColor: [
          "blue",
          "red",
          "yellow",
          "green",
        ],
        borderWidth: 2,
      },
    ],
  });
  return <Pie data={userData} />;
}

export default PieChart;
