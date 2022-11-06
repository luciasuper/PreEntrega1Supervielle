import React from "react"
import MyButton from "../MyButton/MyButton"
import "./ItemListContainer.css"


function Item(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.imgurl}/>
            </div>
            <div className="card-detail">    
                <h3>{props.title}</h3>
                <p>${props.price}</p>
            </div>
            <div>
                <MyButton color="green">
                    Agregar al Carrito
                </MyButton>
            </div>
        </div>
    )
}

export default Item;