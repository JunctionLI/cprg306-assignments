"use client"
import {useState} from "react";
import NewItem from "./new-item";
import Link from "next/link";


export default function NewItemPage(){

    //name field
    const[name,setName]=useState("");
    //quantity
    const[quantity ,setQuantity]=useState(1);

    //category field
    const[category,setCategory]=useState("produce");
 

    const increment = () =>{
        let currentQuantity = quantity;
        if (quantity < 20 ){
            setQuantity(currentQuantity+1);
        }
        else{
            alert("Quantity should be equal to or less than 20.");
        }

    }

    const decrement = () =>{
        let currentQuantity = quantity;
        if (quantity> 1 ){
            setQuantity(currentQuantity-1);
        }
        else{
            alert("Quantity should be at least 1.");
        }

    }



    const handleNameChange = (event) => setName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) =>{
        event.preventDefault();

        let item = {iName:name, iQuantity:quantity, iCategory:category};

        console.log(item);

        alert(`
        Item Name: ${item.iName}
        Item Quantity: ${item.iQuantity}
        Item Category: ${item.iCategory} `);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };


    return(
        <main>
            <div className="max-w-sm mx-auto p-4 bg-slate-400 shadow-md rounded-lg" >
                <form className="flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
                    <input value={name} placeholder="item name" required onChange={handleNameChange} className="p-2 w-full rounded border border-gray-500  bg-slate-600 text-white"></input>
                    <div className="flex">
                        <NewItem currentQuantity={quantity} incrementFunction={increment} decrementFunction={decrement}/>
                        <select onChange={handleCategoryChange} value={category} className="h-30 w-full p-2 m-4 border border-gray-300 bg-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option seleted value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen foods">Frozen Foods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
                </form>
            </div>
            
            <Link href="./" className="italic hover:underline hover:text-green-400 ">Back to Main</Link>
        </main>
    );
}