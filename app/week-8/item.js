export function Item({ name, quantity, category, onItemSelect }) {
    return (
      <div className="mb-4 indent-7 cursor-pointer" onClick={() => onItemSelect && onItemSelect(name)}>
        <p className="font-bold text-xl">{name}</p>
        <p>Buy {quantity} in {category}</p>
      </div>
    );
  }