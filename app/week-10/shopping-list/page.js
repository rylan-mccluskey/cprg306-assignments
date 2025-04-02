"use client";

import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { getItems, addItem } from "../_services/shopping-list-service";

import { useState, useEffect } from "react";

export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");
  const [items, setItems] = useState(itemsData);

  useEffect(() => {
    if (user) {
      const loadItems = async () => {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      };
      loadItems();
    }
  }, [user]);

  const handleItemSelect = (name) => {
    const cleanName = name.trim();
    setSelectedItemName(cleanName);
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-gray-950 p-4">
    <div className="flex justify-between space-x-8">

      <div className="w-full md:w-1/3">
        <h1 className="font-bold text-3xl">Shopping List</h1>
        <br />

        <NewItem onAddItem={handleAddItem} />

        <div className="mt-4">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

      </div>

      <div className="meal-ideas w-full p-4 shadow-lg">
        <h2 className="font-bold text-2xl mb-4">Meal Ideas</h2>
        {selectedItemName ? (
          <MealIdeas ingredient={selectedItemName} />
        ) : (
          <p className="">Select an item to see meal ideas</p>
        )}
      </div>
    </div>
  </main>
  );
}

