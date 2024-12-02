
import React, { useState } from "react";

function Additemform({ addItem }) {
  const [newitem, setnewitem] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (newitem.trim() === "") {
      alert("Please enter a valid item!");
      return;
    }
    addItem(newitem);
    setnewitem("");
  };

  const inputplace = (e) => {
    setnewitem(e.target.value);
  };

  return (
    <form onSubmit={handlesubmit}>
      <h1>Add New Item</h1>
      <label htmlFor="new-item">New Item:</label>
      <input
        id="new-item"
        type="text"
        value={newitem}
        onChange={inputplace}
        placeholder="Enter item here"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default Additemform;
