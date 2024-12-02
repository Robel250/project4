
import React from "react";
import Item from "./Item";

function ItemList({ items, deleteItem }) {
  return (
    <div>
      <h2>Items</h2>
      {items.length === 0 ? (
        <p>No items to display.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <Item
              key={index} 
              item={item}
              index={index}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;

