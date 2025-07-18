import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card">
        <img src="https://t4.ftcdn.net/jpg/06/22/22/17/360_F_622221708_Gg16ZdaNSixeaIORq9MuuT4w9VWTkYw4.jpg" alt="card_image" />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card