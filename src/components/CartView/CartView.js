import React, { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import MyButton from "../MyButton/MyButton";
import "./cartview.css";
import { createOrder, exportArrayToFirestore } from "../../Services/firestore";
import { useNavigate } from "react-router-dom";
import CartForm from "./CartForm";



function CartView() {
  const { cart, removeItem, clear, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();

if (cart.length === 0) return <div className="cart-container"> <h1 style={{color:"black",textAlign:"center"}}>Sin productos en tu Carrito</h1> </div>;
const  totalFinal = cart.map(producto => producto.price * producto.count).reduce((prev, curr)=> prev + curr , 0)
async function handleCheckout(evt, data) {
  const order = {
    buyer: data,
    items: cart,
    total: totalFinal ,
    date: new Date(),
  };

  
  const orderId = await createOrder(order);
    navigate(`/thankyou/${orderId}`);
}

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imgurl} alt={item.title} />
          <h2>{item.title}</h2>
          <h4>${item.price}</h4>
          <h4>Cantidad: {item.count}</h4>
          <MyButton onTouchButton={() => removeItem(item.id)} colorBtn="red">
            X
          </MyButton>
          <h4>total: ${item.price* item.count} </h4>
        </div>
      
      ))}
      {/* <MyButton colorBtn="pink" onTouchButton={handleCheckout}>
        Finalizar Compra
      </MyButton> */}
      <p style={{color:"black",textAlign:"center",marginLeft:100,fontSize:25}}><b>Total</b>: $ {totalFinal} </p>
      <CartForm onSubmit={handleCheckout} />
      <div style={{display:"flex", justifyContent:"center",marginLeft:100}}>
        <MyButton onTouchButton={() =>clear()}>Vaciar carrito</MyButton>
      </div>
    </div>
  );
} 

export default CartView;