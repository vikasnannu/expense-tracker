import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const Initial_Expenses = [
];

const App = () => {

  const [expenses, setExpenses] = useState(Initial_Expenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense afterNewExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

}

export default App;
