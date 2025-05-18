import React from 'react'
const Button = (Props) => {
const {name , handleClick}= Props

return <button onClick={handleClick}>{name}</button>
}

export default Button