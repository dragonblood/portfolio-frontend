import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

import { barOptions, barData } from "../../components/charts/barChart";
import JsonData from "../../components/charts/chartData1.JSON";
import StockChart from "../../components/charts/chart";

import styles from "../../styles/Stocks.module.css";


export default function Stocks() {
  return (
    <>
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
        {/*<div className="bg-blue-100 text-lg font-bold text-center p-10 rounded-lg col-span-3">*/}
        <div className="col-span-3 row-span-2 rounded-lg bg-green-50 p-10 text-center text-lg font-bold text-slate-900 shadow-lg h-30">
          <Bar options={barOptions} data={barData} height={500}/>
        </div>
        <div className="shadow-lg text-lg font-bold text-center p-10 rounded-lg">
          5
        </div>
      </div>
       <div className="flex items-center justify-center px-5 py-5">

       </div>
    </>
  );
}
