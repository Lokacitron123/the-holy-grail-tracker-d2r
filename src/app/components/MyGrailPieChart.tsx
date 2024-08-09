"use client";
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
interface MyGrailPieChartProps {
  percentage: string;
  missing: string;
}

ChartJS.register(Tooltip, Legend, ArcElement);

const MyGrailPieChart = ({ percentage, missing }: MyGrailPieChartProps) => {
  const options = {};

  const pieChartData = {
    labels: ["Found Items", "Missing"],
    datasets: [
      {
        data: [percentage, missing],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className='h-60'>
      <Pie options={options} data={pieChartData} />
    </div>
  );
};

export default MyGrailPieChart;
