import React, { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState'

const AddTransactions = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const {addTransaction} = useContext(GlobalContext)
  function handleChangeText(e) {
    setText(e.target.value);
  }
  function handleChangeAmount(e) {
    setAmount(e.target.value);
  }
  function submit(e){
    e.preventDefault()
    //creating an object for recording transactions
    const newTransactions= {
      id: Math.floor(Math.random()*10000),
      text,
      amount : +amount
    }
    console.log(newTransactions)
    addTransaction(newTransactions)
    setText('')
    setAmount('')
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => handleChangeText(e)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => handleChangeAmount(e)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
export default AddTransactions;
