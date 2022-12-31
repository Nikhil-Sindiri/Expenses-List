import ExpenseItem from './ExpenseItem';
import './Expense.css'
import Card from './Card'
function Expense(props) {
  const expenses=props.expenses
  return (
    <Card className='expenses'>
      <ExpenseItem title={expenses.at(0).title} amount={expenses.at(0).amount} date={expenses.at(0).date}/>
      <ExpenseItem title={expenses.at(1).title} amount={expenses.at(1).amount} date={expenses.at(1).date}/>
      <ExpenseItem title={expenses.at(2).title} amount={expenses.at(2).amount} date={expenses.at(2).date}/>
      <ExpenseItem title={expenses.at(3).title} amount={expenses.at(3).amount} date={expenses.at(3).date}/>
    </Card>
  );
}

export default Expense;