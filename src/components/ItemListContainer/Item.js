import React from "react";
import MyButton from "../MyButton/MyButton";
import "./ItemListContainer.css";
import {Link} from "react-router-dom";


function Item({title, imgurl, price, color, id}) {
    const urlDetail = `/detail/${id}`;
    return (
        <div>
            <div className="card">
                <div className="card-img">
                    <img src={imgurl}/>
                </div>
                <div className="MyButtonDiv" >
                <Link to={urlDetail}>
                    <MyButton color="green">
                        Ver mas
                    </MyButton>
                </Link>
                </div>

                <div className="card-detail">    
                    <h3 style={{marginLeft:0}}>{title}</h3>
                    <p style={{marginLeft:0}}>${price}</p>
                </div>
            
            </div>  
        </div>    
    )
}

export default Item;