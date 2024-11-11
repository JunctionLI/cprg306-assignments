"use client"

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useEffect, useState } from "react";
import MealIdeas from "./meal-ideas";
import { addItem, getAllItems } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function ShoppingPage(){

    const {user} = useUserAuth ();

    const[sortBy, setSortBy] = useState("name");
    const [selectedItemName, setSelectedItemName] = useState(""); 



    //function to add new item into list
    const handleAddItem = async (newItem) => {
      const updatedList = [...itemsList,newItem]; 
      setItemsList(updatedList);
      await addItem(user.uid,newItem); 
      
      if (sortBy === "name") {
        handleSortByName(updatedList);
      } else if (sortBy === "category") {
        handleSortByCategory(updatedList);
      }
    };


    const [itemsList, setItemsList] = useState([]);

    useEffect(()=>{
        if(user){
            getAllItems(user.uid, setItemsList);
        }
    },[user]);

    console.dir(itemsList);
    console.dir(user.uid);

    //clear name
    const handleItemSelect = (item) => {
      let cleanedName = item.name.split(",")[0].trim();
      cleanedName = cleanedName.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
      setSelectedItemName(cleanedName);
      console.log(`select items ${cleanedName}`);
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

        <main className="flex">
          {/**left part */}
          <div className="w-1/2 p-4">
            <h1 className="text-3xl font-bold m-2 text-yellow-500 ">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={itemsList} handleSortByCategory={() => handleSortByCategory(itemsList)} handleSortByName={() => handleSortByName(itemsList)} onItemSelect={handleItemSelect}/>
          </div>
          {/**right part: meal ideas*/}
          <div className="w-1/2 p-4">
            <MealIdeas ingredient={selectedItemName}/>
          </div>

            <Link href="./" className="italic hover:underline hover:text-green-400">Back to Main</Link>
        </main>
    );
}