"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../../styles/Crypto.module.css";
import { Bar, Doughnut } from "react-chartjs-2";
import { doData, doOptions } from "../../components/charts/doughnut";
import { barData, barOptions } from "../../components/charts/barChart";

export default function Crypto() {
  const cryptoObject = cryptoData();
  return (
    <>
      <section className="pb-5">
        <div className="grid grid-cols-4 gap-4">
          <div className="card bg-base-100 bg-green-50 shadow-xl">
            <div className="card card-body">
              <h1 className="mb-1 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl">
                Total Returns
              </h1>
              <h1 className="mb-1 self-center text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl">
                {cryptoObject.total}
              </h1>
            </div>
          </div>
          <div className="card bg-base-100 bg-green-50 shadow-xl">
            <div className="card card-body">
              <h1 className="mb-1 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl">
                Daily P&L
              </h1>
              <h1 className="mb-1 self-center text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl">
                {cryptoObject.dail_pnl}
              </h1>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card bg-base-100 bg-green-50 shadow-xl">
            <div className="card card-body">
              <h1 className="mb-1 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl">
                Total Invested
              </h1>
              <h1 className="mb-1 self-center text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl">
                {cryptoObject.invested}
              </h1>
            </div>
          </div>
          <div className="card bg-base-100 bg-green-50 shadow-xl">
            <div className="card card-body">
              <h1 className="mb-1 font-extrabold text-xl leading-none tracking-tight text-gray-900 md:text-xl">
                Current Value
              </h1>
              <h1 className="mb-1 self-center text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl">
                {cryptoObject.current_val}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-30 col-span-2 row-span-2 rounded-lg bg-green-50 p-10 text-center text-lg font-bold text-slate-900 shadow-lg">
            <Bar
              className="{styles.mainBar}"
              options={barOptions}
              data={barData}
              height={500}
            />
          </div>
          <div className="h-30 row-span-2 rounded-lg bg-green-50 p-10 text-center text-lg font-bold text-slate-900 shadow-lg">
            <Doughnut
              className="{styles.mainBar}"
              data={doData}
              width={100}
              height={500}
              options={doOptions}
            />
          </div>
          <div className="col-span-3">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <ListCrypto />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const cryptoData = () => {
  Crypto = GetCrypto("http://127.0.0.1:8000/crypto/");

  if (Crypto != 0) {
    debugger;
    return {
      current_val: Crypto[0].current_val,
      total: Crypto[0].total,
      dail_pnl: Crypto[0].dail_pnl,
      invested: Crypto[0].invested,
    };
  } else {
    return {
      current_val: 0,
      total: 0,
      dail_pnl: 0,
      invested: 0,
    };
  }
};

const ListCrypto = () => {
  Crypto = GetCrypto("http://127.0.0.1:8000/crypto/coins/");
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
};

const GetCrypto = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // const [Crypto, setCrypto] = useState([]);
  // const [loading, setLoading] = useState(true);

  const fetchCryptoData = async () => {
    try {
        fetch(url, {
          next: { revalidate: 10 },
        })
        .then(res => res.json())
        .then(data => setResponse(data))
        .catch(err => setError(err));
      // const Cryptos = await cryptoList.json();
      // setCrypto(Cryptos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCryptoData().then((Crypto) => {
      return Crypto;
    });
  }, [Crypto, url]);

  if (response) {
    return <p>{response}</p>;
  } else if (error) {
    return <p>Error: {error.message}</p>;
  } else {
    return <p>Loading...</p>;
  }
};

const CryptoTable = ({ crypto }) => {
  const { name, symbol, amount, price } = crypto || {};
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
