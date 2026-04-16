// импорты
import { useState } from "react";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {

    //обьявление переменной а также , поскольку это usestate добавляет возможность прямого изменения через сет
    const [selectedYear, setSelectedYear] = useState("2025");

    // обычный хэндлер который позволяет изменять переменную года
    const filterChangeHandler = (event) => {
        setSelectedYear(event.target.value);
    };

    // логика фильтрации по году где айтемы появляются только по выбранному году
    const filteredExpenses = props.expenses.filter(el => {
        return el.date.getFullYear().toString() === selectedYear;
    });

    return (
        <Card className="expenses">

            {/* опции для фильтрации, мы их ввели мануально, они здесь для сортировки по годам, можно сделать чтобы эти года брались из существующих данных*/}
            <div className="expenses-filter">
                <label>Filter by year</label>
                <select value={selectedYear} onChange={filterChangeHandler}>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                </select>
            </div>

            {/* conditional rendering, рендерит окно в зависимости от use state переменнойб требется чтобы окно появлялось только когда там есть контент*/}
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