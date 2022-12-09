import React, { useContext } from "react";
import {cartContext} from "../../Context/CartContext"
// import IconSVG from "./IconSVG";
import { Link } from "react-router-dom";

function CartWidget() {
  const miContext = useContext(cartContext)
//   return <div style={{marginTop: 6,fontSize:30, cursor:'pointer'}}>🛒</div>;
// }
  return (
    <div style={{marginTop:18,marginLeft:10}}>
      <Link  to="/cart">
        🛒
        {/* <IconSVG /> */}
      </Link>
      {miContext.itemsInCart() > 0 && <span style={{ color: "red" }}>{miContext.itemsInCart()}</span>}
    </div>
  );
}


export default CartWidget;