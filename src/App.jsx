
import { useState } from 'react';
import Additemform from './Additemform';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Additemform addItem={addItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

