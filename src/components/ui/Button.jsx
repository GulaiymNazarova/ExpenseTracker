// импорты
import React from 'react'

// компонент универсальной кнопки
const Button = ({children, onClick}) => {
  return (
      <button onClick={onClick}>{children}</button>
  )
}

export default Button