import React from 'react'
import "./Card.css"
import dev from "../../assets/web-dev.png"
function Card({title,image}) {
  return (
   <div className="card">
    <h1>{title}</h1>
    <div className="hovercard">
        <img src={image} alt="" />
    </div>
   </div>
  )
}

export default Card
