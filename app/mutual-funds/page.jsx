"use client";
import React, { Component } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

import { doData } from "../../components/charts/doughnut";
import styles from "../../styles/MutualFunds.module.css";

export default function MutualFunds() {
  return (
    <>
        <section className="">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-indigo-600 col-span-2 h-48 rounded">
                <Doughnut data={doData} width={100} height={50} options={{ maintainAspectRatio: false }}/>
              </div>
              <div className="bg-indigo-600">02</div>

              <div className="bg-indigo-600">03</div>
              <div className="bg-indigo-600">04</div>
              <div className="bg-indigo-600">05</div>

              <div className="bg-indigo-600">06</div>
              <div className="bg-indigo-600">07</div>
              <div className="bg-indigo-600">08</div>

              <div className="bg-indigo-600">09</div>
              <div className="bg-indigo-600 col-span-2">


                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Product name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Color
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Category
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Price
                      </th>
                      <th scope="col" className="py-3 px-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17
                      </th>
                      <td className="py-4 px-6">
                        Sliver
                      </td>
                      <td className="py-4 px-6">
                        Laptop
                      </td>
                      <td className="py-4 px-6">
                        $2999
                      </td>
                      <td className="py-4 px-6 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                    </tr>
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                      </th>
                      <td className="py-4 px-6">
                        White
                      </td>
                      <td className="py-4 px-6">
                        Laptop PC
                      </td>
                      <td className="py-4 px-6">
                        $1999
                      </td>
                      <td className="py-4 px-6 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                      </th>
                      <td className="py-4 px-6">
                        Black
                      </td>
                      <td className="py-4 px-6">
                        Accessories
                      </td>
                      <td className="py-4 px-6">
                        $99
                      </td>
                      <td className="py-4 px-6 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>


              </div>
            </div>
        </section>
    </>
  );
}

// export function CryptoTable({ crypto }) {
//   const { id, name, symbol, amount, price } = crypto || {};
//
//   return (
//     <tr
//       className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//       <th scope="row"
//           className="px-6 py-4 font-medium text-gray-50 dark:text-white whitespace-nowrap">
//         <Link href={`/crypto/${id}`}>{name}</Link>
//       </th>
//       <td className="px-6 py-4">
//         {symbol}
//       </td>
//       <td className="px-6 py-4">
//         {amount}
//       </td>
//       <td className="px-6 py-4">
//         {price}
//       </td>
//     </tr>
//   );
// }