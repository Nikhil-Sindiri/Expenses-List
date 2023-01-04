import { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] =useState('');
    const [enteredDate,setEnteredDate]=useState('');
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prev) => {
        //     return {
        //         ...prev,
        //         enteredTitle: event.target.value,
        //     }
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prev) => {
        //     return {
        //         ...prev,
        //         enteredAmount: event.target.value,
        //     }
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput((prev) => {
        //     return {
        //         ...prev,
        //         enteredDate: event.target.value,
        //     }
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)

        }
        props.onSaveExpenseData(expenseData);
        props.setAddNewExpenseState(false);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;