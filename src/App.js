import "./App.css";
import React, { useState } from "react";
//import ExpenseItem from './components/ExpenseItem';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  { id: "a1", title: "Iphone 13", amount: 79000, date: new Date(2021, 11, 8) },
  {
    id: "a2",
    title: "Iphone 13 pro max",
    amount: 179000,
    date: new Date(2021, 11, 22),
  },
];
function App() {
  const [dynaExpenses, setDynaExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setDynaExpenses((prevDynaExpenses) => {
      return [expense, ...prevDynaExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={dynaExpenses} />
    </div>
  );
}

export default App;
