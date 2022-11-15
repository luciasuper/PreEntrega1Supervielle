import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/MockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    
    const [product, setProduct] = useState([]);
    const { idItem } = useParams();
    console.log(useParams());

async function getItemsAsync() {
    let respuesta = await getSingleItem(idItem);
    setProduct(respuesta);
    console.log(respuesta);
    }

useEffect(() => {
    getItemsAsync();
    }, []); 
    
    return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
