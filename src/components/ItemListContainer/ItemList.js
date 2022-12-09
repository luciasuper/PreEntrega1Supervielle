import React, {memo} from "react";
import Item from "./Item";

function ItemList({products}) {
  console.log(products.title);
  return (
    <div className="item-list">
      {products.map((product) => {
        return (
          <Item
          key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        );
      })}
    </div>
  );
}

export default React.memo(ItemList);
