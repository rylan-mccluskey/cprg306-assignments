export function Item({ name, quantity, category, onSelect }) {
  
  const clickHandler = () => {
    if (onSelect && typeof onSelect === "function")
    onSelect(name);
  }
  
  return (
      <div className="mb-4 indent-7 cursor-pointer" onClick={clickHandler}>
        <p className="font-bold text-xl">{name}</p>
        <p>Buy {quantity} in {category}</p>
      </div>
    );
  }