//импорттор
import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
import Card from '../ui/Card'

const NewExpenses = (props) => {

    // получаем данные из формы
    const getExpenseHandler = (expense) => {

        // генерируем случайный id для нового расхода
        const expenseWithId = {...expense, id: Math.random().toString()}

        // отправляем данные в родительский компонент
        props.onAdd(expenseWithId)
    }

    return (
        <Card className='new-expense'>
            <ExpenseForm onGet={getExpenseHandler}/>
        </Card>
    )
}

export default NewExpenses