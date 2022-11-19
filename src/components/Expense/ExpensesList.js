import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // console.log(props);
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((ob) => {
        return (
          <ExpenseItem
            key={ob.id}
            id={ob.id}
            title={ob.title}
            date={ob.date}
            amount={ob.amount}
            {...props}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
