import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseHandler = (enteredexpenseData) => {
    const expenseData = {
      ...enteredexpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditHandler = (event) => {
    setIsEditing(true);
  };
  const stopEditHandler = (event) => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={stopEditHandler} />
      ) : (
        <button onClick={startEditHandler}>AddExpense</button>
      )}
    </div>
  );
};
export default NewExpense;
