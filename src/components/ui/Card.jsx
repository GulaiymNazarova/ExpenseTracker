// импорты
import React from 'react'
import './Card.css'

// компонент универсальной карточки
const Card = ({children, className}) => {
  return (
      <div className={`${className} card`}>{children}</div>
  )
}

export default Card