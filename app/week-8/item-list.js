"use client";

import { useState, useEffect } from "react";
import { Item } from "./item";


export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");


    const sortedItems = ([...items].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    }));

  return (
    <div className="mb-4">
      <div className="flex gap-2 mb-4">
        <p>Sort by: </p>
        <button
          onClick={() => setSortBy("name")}
          className={`px-9 py-1 ${sortBy === "name" ? "bg-red-700 text-white" : "bg-orange-500"}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-8 py-1 ${sortBy === "category" ? "bg-red-700 text-white" : "bg-red-500"}`}
        >
          Category
        </button>
      </div>
      
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id} className="p-1 mb-3 bg-gray-900 max-w-sm">
            <Item name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect}/>
          </li>
        ))}
      </ul>
    </div>
  );
}