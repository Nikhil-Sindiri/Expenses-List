import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
function NewExpense(props) {
    function saveExpenseData(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString(),
        }    
        console.log("New expense");
        console.log(expenseData);
        props.addExpenseHandler(expenseData);
    }
    function clickHandler(event){
        setAddNewExpenseState(true)
    } 
    const[addNewExpenseState,setAddNewExpenseState]=useState(false);
    const addNewExpenseButton=(
        <button onClick={clickHandler}>Add New Expense</button>
    )
    return ( 
        <div className='new-expense'>
        {
            //displays Add new Expense button
            (addNewExpenseState === false )&&  addNewExpenseButton
        }
        {
            //displays when Add New Expense button is clicked
            addNewExpenseState && <ExpenseForm onSaveExpenseData={saveExpenseData} setAddNewExpenseState={setAddNewExpenseState} />
        }   
        </div>
     );
}

export default NewExpense;