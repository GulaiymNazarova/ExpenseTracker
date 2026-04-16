// импорты
import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
import Card from '../ui/Card'

const NewExpenses = (props) => {

    // хэндлер получающий инфу из формы
    const getExpenseHandler = (expense) => {

        // добавление уникального айдишника
        const expenseWithId = {...expense, id: Math.random().toString()}

        // lifting up, передача данных parent компоненту
        props.onAdd(expenseWithId)
    }

    return (
        <Card className='new-expense'>
            <ExpenseForm onGet={getExpenseHandler}/>
        </Card>
    )
}

export default NewExpenses