"use client"
import { useState } from "react";
import Item from "./item";
const itemObj = require('./items.json');

export default function ItemList(){

  const [items, setItems] = useState(itemObj); 
  const[sortBy, setSortBy] = useState("name");

  
  function handleSortByName(){
    const sortedItems = [...items].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setItems(sortedItems);
    setSortBy("name");

  };

  function handleSortByCategory(){
    const sortedItems = [...items].sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
    setItems(sortedItems);
    setSortBy("category");
  };

  return(
    <div>
      <div className="ml-5">
        <label>Sort By: </label>
        <button className="bg-yellow-500 p-1 m-2 w-28" onClick={handleSortByName}>Name</button>
        <button className="bg-yellow-500 p-1 m-2 w-28" onClick={handleSortByCategory}>Category</button>
      </div>
      <div>
      {items.map((item, index) => (
          <Item key={index} itemObj={item} />
        ))}
      </div>
      
    </div>
  );
}