import { useState } from "react";
function AddItem() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.trim()) return alert("Item cannot be empty!");
    setItems([...items, item]);
    setItem("");
  };
  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter item"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
export default AddItem;