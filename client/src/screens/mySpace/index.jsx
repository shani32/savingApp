import React, { useLayoutEffect } from "react";
import Balance from "./components/balance/balance.component";

import IncomeExpenses from "./components/incomeExpenses/incomeExpenses.components";
import TransactionList from "./components/transactionsList/transactionsList.components";
import "./mySpace.styles.css"

const MySpace = () => {

  return (
    <div id="my-space-container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
    </div>
  );
};

export default MySpace;
