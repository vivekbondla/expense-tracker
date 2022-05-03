import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021,12,8);
  // const expenseTitle = "Iphone 13";
  // const expenseAmount = 79000 ;
  // const day = props.date.toLocaleString('en-us',{day: '2-digit'});
  // const month = props.date.toLocaleString('en-us',{month:'long'});
  // const year = props.date.getFullYear();

  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> or -->*/}
      <div>
        {/* <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div> */}
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> {props.amount}₹</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
