import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../Context/GlobalState";
import Transaction from "../atoms/transaction.components";
import "./transactionsList.styles.css";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="transaction-container">
      <div className="transaction-wrapper">
        <div className="transaction-wrapper-paper">
          <h3 className="transaction-expenses-header">Expenses of the month</h3>
          <ul id="transaction-list">
            {transactions.map((transaction) => (
              <Transaction key={transaction._id} transaction={transaction} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
