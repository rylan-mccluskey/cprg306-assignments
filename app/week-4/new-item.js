"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, quantitySet] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      quantitySet(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      quantitySet(quantity - 1);
    }
  };

  return (
    //struggled with the styling
    <div className="flex items-center justify-center">
        <div className="flex items-center justify-between place-content-center bg-white p-3 w-40">
            <span className="text-black">{quantity}</span>

        <div className="flex gap-1">
            <button 
            onClick={decrement} 
            disabled={quantity === 1}
            className="px-3 py-0.1 bg-blue-500 text-white rounded disabled:bg-gray-400">
            - </button>

            <button
            onClick={increment}
            disabled={quantity === 20}
            className="px-3 py-0.1 bg-blue-500 text-white rounded disabled:bg-gray-400">
             + </button>
            </div>
        </div>
    </div>
  );
}

