import React from 'react';
import './style.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransactions from './components/AddTransactions';
import {GlobalProvider} from './context/GlobalState'

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        </div>
        <AddTransactions/>
    </GlobalProvider>
  );
}