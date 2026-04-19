//импорттор
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    return (
        <div className='expense-item'>
            {/*Титул*/}
            <h2 className='expense-item__description'>{props.expense.title}</h2>

            {/*Цена */}
            <div className='expense-item__price'>{props.expense.price} KGS</div>

            {/*отображаем дату через отдельный компонент*/}
            <ExpenseDate date={props.expense.date}/>
        </div>
    )
}

export default ExpenseItem