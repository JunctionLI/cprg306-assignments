"use client"
import { useState } from "react";
import Item from "./item";
const itemObj = require('./items.json');

export default function ItemList({items,handleSortByCategory,handleSortByName}){

  return(
    <div>
      <div className="ml-5">
        <label>Sort By: </label>
        <button className="bg-yellow-500 p-1 m-2 w-28" onClick={handleSortByName}>Name</button>
        <button className="bg-yellow-500 p-1 m-2 w-28" onClick={handleSortByCategory}>Category</button>
      </div>
      <section>
      {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
        
      </section>
      
    </div>
  );
}