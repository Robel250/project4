
import React from "react";

function Item({ item, index, deleteItem }) {
  return (
    <li className="item">
      {item}
      <button
        className="delete-button"
        onClick={() => deleteItem(index)}
        aria-label={`Delete ${item}`}
      >
        Delete
      </button>
    </li>
  );
}

export default Item;

