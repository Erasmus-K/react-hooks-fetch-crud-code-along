import React, { useState } from "react";

const initialItems = [
  { id: 1, name: "Apples", category: "Produce" },
  { id: 2, name: "Milk", category: "Dairy" },
  { id: 3, name: "Yogurt", category: "Dairy" },
  { id: 4, name: "Cake", category: "Dessert" },
];

function ShoppingList() {
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (e) => setFilter(e.target.value);

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const displayedItems =
    filter === "All"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={filter} onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {displayedItems.map((item) => (
          <li key={item.id}>
            {item.name} ({item.category})
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
