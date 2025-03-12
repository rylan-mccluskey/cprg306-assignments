"use client";
import { useState } from 'react';

const categories = [
  "Produce",
  "Dairy",
  "Bakery",
  "Meat",
  "Frozen Foods",
  "Canned Goods",
  "Dry Goods",
  "Beverages",
  "Snacks",
  "Household",
  "Other",
];

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState(categories[0].toLowerCase());

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory(categories[0].toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Item Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-72 p-2 bg-gray-800 border-gray-500 rounded-lg"
        />
      </div>

      <div className='flex space-x-4'>
        <div className="flex space-x-4">
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            max="99"
            required
            className="w-32 p-2 bg-gray-800 border-gray-500 rounded-lg "
          />
        </div>

        <div className="flex-1 space-y-2">
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 bg-gray-800 rounded-lg"
          >
            {categories.map((category, index) => (
              <option key={index} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="w-1/5 py-2 px-4 bg-gray-500 text-black font-semibold rounded-lg hover:bg-gray-600">
        Add an item
      </button>
    </form>
  );
}