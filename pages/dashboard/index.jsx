import React, { Component } from "react";

import { Bar, Doughnut } from "react-chartjs-2";

// css
import styles from "../../styles/Dashboard.module.css";

// JSON dummy data until i setup APIS
import JsonData from "./chartData1.JSON";

// Modules
import StockChart from "../../components/chart";
import { barOptions, barData } from "./barChart";
import { doData } from "./doughnut";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className="grid grid-cols-3 gap-2 p-5">
        <div className="shadow-lg bg-green-50 text-slate-900 text-lg font-bold text-center p-10 rounded-lg col-span-3 row-span-2">
          <Bar options={barOptions} data={barData} />
        </div>
        <div className="shadow-lg bg-green-50 text-slate-900 text-lg font-bold text-center p-10 rounded-lg col-span-2 row-span-2">
          <Doughnut data={doData} />
        </div>
        <div className="shadow-lg bg-violet-600 text-slate-900 text-lg font-bold text-center p-10 rounded-lg">
          3
        </div>
        <div className="shadow-lg bg-violet-600 text-slate-900 text-lg font-bold text-center p-10 rounded-lg">
          4
        </div>
      </div>
    </div>
  );
}
