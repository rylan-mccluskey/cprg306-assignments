export function Item({ name, quantity, category }) {
    return (
      <li className="mb-4 indent-7">
        <p className="font-bold text-xl">{name}</p>
        <p>Buy {quantity} in {category}</p>
      </li>
    );
  }