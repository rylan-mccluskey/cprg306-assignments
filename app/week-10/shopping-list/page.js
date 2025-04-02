"use client";

import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";

import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import { useState, useEffect } from "react";

export default function Page() {
  const { user } = useUserAuth();
  const [selectedItemName, setSelectedItemName] = useState("");
  const [items, setItems] = useState([]);

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
    setSelectedItemName(name.trim());
  };

  const handleAddItem = async () => {
    if (newItemName.trim() === "") return;
    const itemId = await addItem(user.uid, newItem);
    setItemName([...items, { id: itemId, ...newItem }]);
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

      <div className="meal-ideas w-full p-4 object-scale-down shadow-lg">
        <h2 className="font-bold text-2xl mb-4">Meal Ideas</h2>
        {selectedItemName ? (
          <div className="w-full h-full">
          <MealIdeas ingredient={selectedItemName} />
          </div>
        ) : (
          <p className="">Select an item to see meal ideas</p>
        )}
      </div>
    </div>
  </main>
  );
}

