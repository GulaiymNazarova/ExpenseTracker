// импорты
import { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/newExepnses/NewExpenses';

// dummy data, симулирует настояющую инфу
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Cola",
    price: 100,
    date: new Date(2025, 1, 12)
  },
  {
    id: 2,
    title: "Carpet",
    price: 2500,
    date: new Date(2026, 10, 9)
  },
  {
    id: 3,
    title: "Sofa",
    price: 10330,
    date: new Date(2024, 3, 6)
  },
]

function App() {

  // стейт всех экспенсов, следится глобально поэтому сидит в апп
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // хэндлер добавления новых экспенсов
  const addExpenseHandler = (expense) => {
    return setExpenses([expense, ...expenses])
  }

  return (
      <div className="App">

        {/* компонент для добавки экспенсов */}
        <NewExpenses onAdd={addExpenseHandler}/>

        {/* компонент для показа экспенсов */}
        <Expenses expenses={expenses}/>

      </div>
  );
}

export default App;