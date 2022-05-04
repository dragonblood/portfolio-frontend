import React, { Component } from "react";
import { SideNav } from "../../components/side-nav";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

// css
import styles from "../../styles/Dashboard.module.css";

// JSON dummy data until i setup APIS
import JsonData from "../../components/chartData1.JSON";


// Modules
import StockChart from "../../components/chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

export default function Stocks() {
  return (
    <>
    <SideNav></SideNav>
    <div className="pl-20 pr-10">
      <div className="grid grid-cols-3 gap-3 p-5">
        <div className="rounded-lg">
          <StockChart className="shadow-lg" info={JsonData} />
        </div>
        <div className="rounded-lg">
          <StockChart info={JsonData} />
        </div>
        <div className="rounded-lg">
          <StockChart info={JsonData} />
        </div>
        <div className="bg-blue-100 text-lg font-bold text-center p-10 rounded-lg col-span-3">
          <Bar options={options} data={data} />
        </div>
        <div className="shadow-lg text-lg font-bold text-center p-10 rounded-lg">
          5
        </div>
      </div>
      {/* <div className="flex items-center justify-center px-5 py-5"> */}

      {/* </div> */}
    </div>
    </>
  );
}
