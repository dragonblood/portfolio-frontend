import React, { Component } from "react";

import { Bar, Doughnut } from "react-chartjs-2";

import { SideNav } from "../../components/side-nav";

// css
import styles from "../../styles/Dashboard.module.css";

// JSON dummy data until i setup APIS
import JsonData from "../../components/chartData1.JSON";

// Modules
import StockChart from "../../components/chart";
import { barOptions, barData } from "../../components/barChart";
import { doData } from "../../components/doughnut";

export default function Dashboard() {
  return (
    <>
    <SideNav></SideNav>
    <div className="pl-20 pr-10">
      <div className="grid grid-cols-3 gap-4 p-5">
        <div className="shadow-lg bg-green-50 text-slate-900 text-lg font-bold text-center p-10 rounded-lg col-span-3 row-span-2">
          <Bar className="h-15" options={barOptions} data={barData} />
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
    </>
  );
}
