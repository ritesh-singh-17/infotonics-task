import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { AreaChartData } from "../../../Data/ChartData";

function AreaChart() {
  const [userData, setUserData] = useState({
    labels: AreaChartData.map((data) => data.day),
    datasets: [
      {
        fill: true,
        label: "Sessions",
        data: AreaChartData.map((data) => data.sessions),
        borderColor: "#0275d8",
        backgroundColor: "rgb(204 227 247)",
      },
    ],
  });
  return <Line data={userData} />;
}

export default AreaChart;
