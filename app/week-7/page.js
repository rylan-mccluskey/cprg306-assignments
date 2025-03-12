"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-gray-950 space-y-4 p-4">
      <h1 className="font-bold text-3xl">Shopping List</h1>
      <br></br>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}

