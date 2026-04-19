//imports
import React, {useState} from 'react'
import './ExpenseForm.css'
import Button from '../ui/Button'

const ExpenseForm = ({onGet}) => {

    // один объект для всех полей формы, через useState
    const [userInputs, setUserInputs] = useState({
        title: '',
        price: '',
        date: ''
    })

// универсальный обработчик, определяет какое поле изменилось и обновляет его
    const InputChangeHandler = (e) => {
        if (e.target.name === 'title') {
            setUserInputs({
                ...userInputs,
                title: e.target.value
            })
        }else if (e.target.name === 'price'){
            setUserInputs({
                ...userInputs,
                price: e.target.value
            })
        }else if (e.target.name === 'date') {
            setUserInputs({
                ...userInputs,
                date: e.target.value
            })
        }
    }

// отправка формы
    const submitHandler = (e) => {
        e.preventDefault()

        // передаем данные наверх в родительский компонент
        onGet({
            title:userInputs.title,
            price: userInputs.price,
            date: new Date(userInputs.date)
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>

                {/* поле для названия */}
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input name='title' type="text" onChange={InputChangeHandler} />
                </div>

                {/* поле для цены */}
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input name='price' type="number" onChange={InputChangeHandler} />
                </div>

                {/* поле для даты */}
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input name='date' type="date" onChange={InputChangeHandler} />
                </div>

                {/* кнопка отправки */}
                <div className='new-expense__actions'>
                    <Button>Add Expense</Button>
                </div>

            </div>
        </form>
    )
}

export default ExpenseForm