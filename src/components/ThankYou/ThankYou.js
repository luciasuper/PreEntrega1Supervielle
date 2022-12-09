import React from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import  { useContext } from "react";
function ThankYou() {
  const idOrder = useParams().idOrder;
  const {clear } = useContext(cartContext);
  return (
    <div style={{color: "black",textAlign:"center" }}>
      <h1>Gracias por tu compra</h1>
      <h3>
        El código de tu pedido es: <strong>{idOrder}</strong>
      </h3>
      {clear()}
    </div>
  );
}

export default ThankYou;