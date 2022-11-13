
import { useState, useEffect } from "react";
import Item from "./Item";
import "./ItemListContainer.css";
import getItems from "../../Services/MockService";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    // <div className="ItemListContainer">
      <div className="item-list">
        {products.map((product) => {
          return (
            <Item
              id={product.id}
              imgurl={product.imgurl}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          );
        })}
      </div>
    // </div>  
  );
}

export default ItemListContainer