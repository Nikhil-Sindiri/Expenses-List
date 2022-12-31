import './App.css';
import Expense from './components/Expense';

function App() {
  const expenses=[
    {
      id: 'e1',
      title: 'toilet paper',
      amount: 200,
      date: new Date(2020,7,14),
    },
    {
      id: 'e2',
      title: 'dairy milk',
      amount: 100,
      date: new Date(2020,2,20),
    },
    {
      id: 'e3',
      title: 'charger',
      amount: 350,
      date: new Date(2020,5,29),
    },
    {
      id: 'e4',
      title: 'Atta',
      amount: 50,
      date: new Date(2020,9,16),
    }
  ]
  return (
    <div>
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
