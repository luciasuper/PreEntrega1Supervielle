import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer  from "./components/ItemDetail/ItemDetailContainer"; 
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContextProvider } from "./Context/CartContext";
import CartView from "./components/CartView/CartView";
import ItemListContainerSearch from "./components/ItemListContainer/ItemListContainerSearch";
// import error from '../assets/img/error.png'
import ThankYou from "./components/ThankYou/ThankYou";
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar  color="rgba(250, 232, 227, 0.8)"/>
          <Routes>
            <Route path="/PreEntrega1Supervielle" element={< ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer/>} />
            <Route path="/detail/:idItem" element={<ItemDetailContainer/>} />
            {/* <Route path="*" element={<h1>ERROR 404</h1> }/> */}
            <Route path="/cart" element={<CartView />} />
            <Route path="/thankyou/:idOrder" element={<ThankYou />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
