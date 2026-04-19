// импорты
import { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/newExepnses/NewExpenses';

// тестовые данные, имитируют расходы
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

  // глобальное состояние всех расходов
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // добавляем новый расход в начало списка
  const addExpenseHandler = (expense) => {
    return setExpenses([expense, ...expenses])
  }

  return (
      <div className="App">

        {/* форма для добавления нового расхода */}
        <NewExpenses onAdd={addExpenseHandler}/>

        {/* список всех расходов */}
        <Expenses expenses={expenses}/>

      </div>
  );
}

export default App;