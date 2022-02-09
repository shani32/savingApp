import React, { useContext } from "react";
import { GlobalContext } from "../../../../Context/GlobalState";
import { numberWithCommas } from "../../../../utils/format";
import "./homePage.atoms.styles.css";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      className={transaction.amount < 0 ? "list-item minus" : "list-item plus"}
    >
      {transaction.text}
      <span>
        {sign}${numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-button"
      >
        DELETE
      </button>
    </li>
  );
};

export default Transaction;
