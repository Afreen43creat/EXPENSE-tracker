import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cards from "../UI/Cards";

const ExpenseItem = (props) => {
  console.log(props);
  const deleteHandler = () => {
    // console.log(props.id)
    props.func(props.id);
  };

  return (
    <li onClick={deleteHandler}>
      <Cards className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Cards>
    </li>
  );
};

export default ExpenseItem;
