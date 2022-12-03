"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../../styles/Crypto.module.css";
import { Bar, Doughnut } from "react-chartjs-2";
import { doData, doOptions } from "../../components/charts/doughnut";
import { barData, barOptions } from "../../components/charts/barChart";

export default function Crypto() {
  const cryptoData ={
    total: 100;
    pnl: 10;

  };
  return (
    <section className="">
      <div className="grid grid-cols-3 gap-4">



          <div className="card bg-base-100 shadow-xl">
            <div className="card card-body">
              <h1 className="mb-1 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Total</h1>
              <h1 className="self-center mb-1 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">{cryptoData.total}</h1>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card card-body">
              <h1 className="mb-1 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">P&L</h1>
              <h1 className="self-center mb-1 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">{cryptoData.pnl}</h1>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
              <div className="card card-body">
                <h1 className="mb-1 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">{cryptoData.name}</h1>
                <h2 className="card-title"></h2>
                <p>
                  {/*{coin.symbol}*/}
                  <br />
                  {/*{coin.amount}*/}
                  <br />
                  {/*{coin.price}*/}
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>


        <div className="col-span-2 row-span-2 rounded-lg bg-green-50 p-10 text-center text-lg font-bold text-slate-900 shadow-lg h-30">
          <Bar className="{styles.mainBar}" options={barOptions}  data={barData} height={500}/>
        </div>
        <div className="row-span-2 rounded-lg bg-green-50 p-10 text-center text-lg font-bold text-slate-900 shadow-lg h-30">
          <Doughnut className="{styles.mainBar}" data={doData} width={100} height={500} options={doOptions}/>
        </div>
        <div className="col-span-3">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <ListCrypto />
          </div>
        </div>
      </div>
    </section>
  );
}

const ListCrypto = () => {
  Crypto = GetCrypto();
  return (
    <div className={styles}>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Symbol
            </th>
            <th scope="col" className="py-3 px-6">
              Amount
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
          </tr>
          </thead>
          <tbody>
          {Crypto.map((currency) => (
            <CryptoTable key={currency.id} crypto={currency} />
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const GetCrypto = () => {
  const [Crypto, setCrypto] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      const cryptoList = await fetch("http://127.0.0.1:8000/crypto/crypto");
      const Cryptos = await cryptoList.json();
      setCrypto(Cryptos);
    };
    fetchCryptoData();
  }, []);

  return Crypto;
};

const CryptoTable = ({ crypto }) => {
  const {name, symbol, amount, price } = crypto || {};
  return (
    <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
      >
        <Link href={`/crypto/${symbol}`}>{name}</Link>
      </th>
      <td className="py-4 px-6">{symbol}</td>
      <td className="py-4 px-6">{amount}</td>
      <td className="py-4 px-6">
        <i className="fas fa-arrow-up mr-4 text-emerald-500"></i>
        {price}
      </td>
    </tr>
  );
};
