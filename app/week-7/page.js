"use client"

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "../week-7/new-item";
import ItemsData from "../week-7/items.json";
import { useState } from "react";

export default function Week7Page(){

    const [itemsList, setItemsList] = useState(

        ItemsData.map( (item) =>({...item}) )
    );
    const[sortBy, setSortBy] = useState("name");

    //function to add new item into list
    const handleAddItem = (newItem) => {
      const updatedList = [...itemsList,newItem]; 
      setItemsList(updatedList);
      
      if (sortBy === "name") {
        handleSortByName(updatedList);
      } else if (sortBy === "category") {
        handleSortByCategory(updatedList);
      }
    };

  
  // Sort by name
  function handleSortByName(list) {
    const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name));
    setItemsList(sorted);
    setSortBy("name");
  }

  // Sort by category
  function handleSortByCategory(list) {
    const sorted = [...list].sort((a, b) => a.category.localeCompare(b.category));
    setItemsList(sorted);
    setSortBy("category");
  };


    return(

        <main>
            <h1 className="text-3xl font-bold m-2 text-yellow-500 ">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={itemsList} handleSortByCategory={() => handleSortByCategory(itemsList)} handleSortByName={() => handleSortByName(itemsList)} />
            <Link href="./" className="italic hover:underline hover:text-green-400">Back to Main</Link>
        </main>
    );
}