import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer  from "./components/ItemDetail/ItemDetailContainer"; 
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import error from '../assets/img/error.png'

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <NavBar  color="rgba(250, 232, 227, 0.8)"/>
          <Routes>
              <Route path="/" element={< ItemListContainer />} />
              <Route path="/category/:idCategory" element={<ItemListContainer/>} />
              <Route path="/detail/:idItem" element={<ItemDetailContainer/>} />
              <Route path="*" element={<h1>ERROR 404</h1> }/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
