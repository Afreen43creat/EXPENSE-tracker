import React,{useState} from "react";
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm'

const NewExpenses=(props)=>{

    // return (
    //     <div className="new-expense">
    //         <ExpenseForm getNewExpenseData={props.getNewExpenseData}></ExpenseForm>
    //     </div>
    // )
    const clickHandler=()=>{
        setContent(
            <ExpenseForm getNewExpenseData={props.getNewExpenseData} onSubmitHandler={onSubmitHandler}></ExpenseForm>
        )
    }
    
    const onSubmitHandler=()=>{
        setContent(<button onClick={clickHandler}>Add New Expense</button>)
    }

    const [content,setContent]=useState(<button onClick={clickHandler}>Add New Expense</button>)


    return (
        <div className="new-expense">
            {content}
        </div>
    )

}

export default NewExpenses;