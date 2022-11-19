import React, { useState } from "react";

import "./Expenses.css";
import Cards from "../UI/Cards";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const getSelectedYear = (val) => {
    setSelectedYear(val);
    // console.log(val);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    //ExpenseFilter is said as controlled component
    <div>
      <Cards className="expenses">
        <ExpenseFilter
          selectedYear={selectedYear}
          getSelectedYear={getSelectedYear}
        ></ExpenseFilter>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpensesList items={filteredExpenses} {...props} />
      </Cards>
    </div>
  );
};

export default Expenses;
