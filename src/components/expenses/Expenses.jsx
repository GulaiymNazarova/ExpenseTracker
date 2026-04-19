// импорттор
import { useState } from "react";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {

    //создаем переменную для года и функцию для ее изменения через useState
    const [selectedYear, setSelectedYear] = useState("2025");

    //функция которая срабатывает при выборе года в выпадающем списке
    const filterChangeHandler = (event) => {
        setSelectedYear(event.target.value);
    };

    // фильтруем расходы, оставляем только те у которых год совпадает с выбранным
    const filteredExpenses = props.expenses.filter(el => {
        return el.date.getFullYear().toString() === selectedYear;
    });

    return (
        <Card className="expenses">

            {/*блок с фильтром по годам, значения прописаны вручную*/}
            <div className="expenses-filter">
                <label>Filter by year</label>
                <select value={selectedYear} onChange={filterChangeHandler}>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                </select>
            </div>

            {/*условный рендер: если нет расходов показываем текст, иначе список*/}
            {
                filteredExpenses.length === 0
                    ? <p>No expenses found</p>
                    : filteredExpenses.map(el => (
                        <ExpenseItem key={el.id} expense={el} />
                    ))
            }

        </Card>
    );
};

export default Expenses;