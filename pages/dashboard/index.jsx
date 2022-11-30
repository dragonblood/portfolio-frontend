import React, { Component } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

// Modules
// import { SideNav } from "../../components/nav/side-nav";
// import StockChart from "../../components/chart";
import { barOptions, barData } from "../../components/charts/barChart";
import { doData } from "../../components/charts/doughnut";
import CardStats from "../../components/card/CardStats.js";

import styles from "../../styles/Dashboard.module.css";

export default function Dashboard() {
  return (
    <>




      <div className="">
        <div className="cont grid grid-cols-3 gap-4 p-5 h-30">
          <div className="rounded-lg bg-violet-600 text-center text-lg font-bold text-slate-900 shadow-lg h-30">

            <CardStats
              statSubtitle="TRAFFIC"
              statTitle="350,897"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />

          </div>
          <div className="rounded-lg bg-violet-600 text-center text-lg font-bold text-slate-900 shadow-lg h-30">

            <CardStats
              statSubtitle="TRAFFIC"
              statTitle="350,897"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />

          </div>
          <div className="rounded-lg bg-violet-600 text-center text-lg font-bold text-slate-900 shadow-lg h-30">

            <CardStats
              statSubtitle="TRAFFIC"
              statTitle="350,897"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />

          </div>
          <div className="col-span-2 row-span-2 rounded-lg bg-green-50 p-10 text-center text-lg font-bold text-slate-900 shadow-lg h-30">
              <Bar className="{styles.mainBar}" options={barOptions}  data={barData} height={500}/>
          </div>
          <div className="row-span-2 rounded-lg bg-green-50 p-10 text-center text-lg font-bold text-slate-900 shadow-lg">
            <Doughnut data={doData} width={100} height={50} options={{ maintainAspectRatio: false }}/>
          </div>
          <div className="rounded-lg bg-violet-600 p-10 text-center text-lg font-bold text-slate-900 shadow-lg">
            3
          </div>
          <div className="rounded-lg bg-violet-600 p-10 text-center text-lg font-bold text-slate-900 shadow-lg h-30">
            4
          </div>
        </div>
      </div>
    </>
  );
}
