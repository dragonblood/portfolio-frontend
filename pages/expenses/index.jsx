import React, { Component } from "react";

import { SideNav } from "../../components/side-nav";

import styles from "../../styles/Expenses.module.css";

export default function Expenses() {
  return (
    <>
      <SideNav></SideNav>
      <div className={styles.container}>
        <h1>Expenses</h1>
      </div>
    </>
  );
}
