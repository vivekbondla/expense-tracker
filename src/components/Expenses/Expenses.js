import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");
  const onChangeFilter = (selectedyear) => {
    console.log(selectedyear);
    setFilteredYear(selectedyear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSelectYear={onChangeFilter} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses} />

      

      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].price}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].price}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].price}
        date={props.expenses[2].date}
      /> */}
    </Card>
  );
};
export default Expenses;
