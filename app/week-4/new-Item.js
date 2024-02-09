"use client"
import React, { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
  
    // Reset the state variables to their initial values
    setName("");
    setQuantity(0);
    setCategory("produce");
  };
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-Gumetal text-white rounded-lg p-4 shadow-xl">
        <div className="mb-2">
          <input
            id="itemName"
            type="text"
            placeholder="Item name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            
            className="mt-1 block w-full px-3 py-2 bg-black border rounded-md shadow-sm focus:outline-none focus:border-blue-300"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="quantity" className="block text-sm font-medium">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            required 
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="mt-1 block w-full px-3 py-2 bg-black border rounded-md shadow-sm focus:outline-none focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full mt-1 px-3 py-2 bg-black border rounded-md shadow-sm focus:outline-none focus:border-blue-300"
          >
             <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen-foods">Frozen Foods</option>
              <option value="canned-goods">Canned Goods</option>
              <option value="dry-goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}
