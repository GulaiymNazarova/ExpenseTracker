// импорты
import React, {useState} from 'react'
import './ExpenseForm.css'
import Button from '../ui/Button'

const ExpenseForm = ({onGet}) => {

    // переменный форма в виде одной, требуется для отправки и использует usestate
    const [userInputs, setUserInputs] = useState({
        title: '',
        price: '',
        date: ''
    })

// единый инпут хэндлер, проверяет что изменяется и в зависимости от этого меняет соотвествующую переменную
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

// функция отправки
    const submitHandler = (e) => {
        e.preventDefault()

        // lifting up, который дает инфу parent компоненту
        onGet({
            title:userInputs.title,
            price: userInputs.price,
            date: new Date(userInputs.date)
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>

                {/* инпут титула */}
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input name='title' type="text" onChange={InputChangeHandler} />
                </div>

                {/* простой инпут для цены */}
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input name='price' type="number" onChange={InputChangeHandler} />
                </div>

                {/* инпут для даты */}
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input name='date' type="date" onChange={InputChangeHandler} />
                </div>

                {/* кнопка отправки через другой компонент + класс оболочки */}
                <div className='new-expense__actions'>
                    <Button>Add Expense</Button>
                </div>

            </div>
        </form>
    )
}

export default ExpenseForm