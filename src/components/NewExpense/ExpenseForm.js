import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);
    props.onSaveExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleHandler} type="text" value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountHandler}
            type="number"
            min="10"
            step="5"
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateHandler}
            type="date"
            min="2019-12-25"
            max="2022-12-25"
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
