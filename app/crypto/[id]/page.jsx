"use client";
import React, { useEffect, useState } from "react";
import { Table, Checkbox, TextInput } from "flowbite-react";
import { Line } from "react-chartjs-2";
import { lineData, lineOptions } from "../../../components/charts/line";
import styles from "../../../styles/Crypto.module.css";

function MyComponent(crypto) {
  // Declare a state variable for storing the API response
  const [response, setResponse] = useState(null);

  // Declare a state variable for storing any errors
  const [error, setError] = useState(null);

  // Use the useEffect hook to make the API call when the component is mounted
  useEffect(() => {

  }, []);

  // If there is a response, render it, otherwise render an error message

}

const GetCoin = (crypto) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchCryptoData = async () => {
    try {
      fetch("http://127.0.0.1:8000/crypto/coins/" + crypto, {
        next: { revalidate: 100 },
      })
        .then(res => res.json())
        .then(data => setResponse(data))
        .catch(err => setError(err));
      // setCrypto(Cryptos);
    } catch (error) {
      console.log("error while fetching: "+error);
    }
  };

  useEffect(() => {
    fetchCryptoData().then((Crypto) => {
      return Crypto;
    });
  }, [response]);

  if (response) {
    return <p>{response}</p>;
  } else if (error) {
    return <p>Error: {error.message}</p>;
  } else {
    return <p>Loading...</p>;
  }
};

export default function CoinPage({ params }) {
  const coin = GetCoin(params.id);
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card card-body">
            <h1 className="mb-1 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Total</h1>
            <h1 className="self-center mb-1 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">{coin.price}</h1>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card card-body">
            <h1 className="mb-1 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">P&L</h1>
            <h1 className="self-center mb-1 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">{coin.pnl}</h1>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="">
            <div className="card card-body">
              <h1 className="mb-1 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">{coin.name}</h1>
              <h2 className="card-title"></h2>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>

        <div className="col-span-3 rounded">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <Line
                data={lineData}
                options={lineOptions}
                width={200}
                height={50}
              />
            </div>
          </div>
        </div>

        {/*<div className="bg-indigo-600">03</div>*/}
        <div className="col-span-2 p-5">
          <h1 className="mb-1 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white p-10">History</h1>
          <TextInput
            className="w-2/5 pb-5 self-end"
            id="search"
            type="search"
            placeholder="Search"
            required={false}
          />
          <Table hoverable={true}>
            <Table.Head>
              <Table.HeadCell className="!p-4">
                <Checkbox />
              </Table.HeadCell>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Color</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="!p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Apple MacBook Pro 17
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="!p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Microsoft Surface Pro
                </Table.Cell>
                <Table.Cell>White</Table.Cell>
                <Table.Cell>Laptop PC</Table.Cell>
                <Table.Cell>$1999</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="!p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Magic Mouse 2
                </Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>Accessories</Table.Cell>
                <Table.Cell>$99</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div className="p-5">
          <p>
            Symbol: {coin.symbol}
            <br />
            Amount: {coin.amount}
            <br />
            Price:  {coin.price}
            <br />
            Market Cap: {coin.market_cap_usd}
            <br />
            Supply: {coin.available_supply}
            <br />
            Total Supply: {coin.total_supply}
            <br />
            {coin.last_updated}
          </p>
        </div>
      </div>
    </>
  );
}
