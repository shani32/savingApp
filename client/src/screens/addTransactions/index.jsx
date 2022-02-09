import React, { useState, useContext, useLayoutEffect } from "react";
import { useSetBackground } from "../../Context/background.context";
import { GlobalContext } from "../../Context/GlobalState";
import "./addTransactions.styles.css";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const setBackground = useSetBackground();

  // useLayoutEffect(() => {
  //   setBackground(
  //     "https://image.shutterstock.com/image-photo/finger-pressing-block-chain-text-260nw-1026226699.jpg"
  //   );
  // }, []);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div className="container">
      <div className="add-transaction-container">
        <h3 className="add-transaction">Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Transaction Name</label>
            <input
              className="add-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text.."
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount (negative-expanse, positive- income)
            </label>
            <input
              className="add-input"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount.."
            />
          </div>
          <button className="add-btn">Add Transaction</button>
        </form>
      </div>
      <div className="img-container"></div>
    </div>
  );
};

export default AddTransaction;

