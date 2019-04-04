import React from "react";

const Cards = (props) => {
    
    return (
        <div>
         <img onClick={() => {
          props.clicked (props.id)
        }} src={props.img} alt="test"/> 
        </div>
    )
}

export default Cards;