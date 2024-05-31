import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      <h1>Saldo Spese</h1>
      <TransactionForm addTransaction={addTransaction} />
      <Summary transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
