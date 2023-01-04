import { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const DUMMY_EXPENSES=[
    {
      id: 'e1',
      title: 'toilet paper',
      amount: 200,
      date: new Date(2021,7,14),
    },
    {
      id: 'e2',
      title: 'dairy milk',
      amount: 100,
      date: new Date(2020,2,20),
    },
    {
      id: 'e3',
      title: 'charger',
      amount: 350,
      date: new Date(2020,5,29),
    },
    {
      id: 'e4',
      title: 'Atta',
      amount: 50,
      date: new Date(2022,9,16),
    }
  ]
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  function addExpenseHandler(expense){
    setExpenses((prev) => {
      return [...prev,expense]
    })
  }
  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
