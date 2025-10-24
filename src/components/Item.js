function Item({ item, onUpdateItem, onDeleteItem }) {
  function handleAddToCartClick() {
    const updatedItem = { ...item, isInCart: !item.isInCart };
    onUpdateItem(updatedItem);
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button onClick={handleAddToCartClick}>
        {item.isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </li>
  );
}

export default Item;
