"use client"
import {useState} from "react";

export default function NewItem({onAddItem}){

    //name field
    const[name,setName]=useState("");
    //quantity
    const[quantity ,setQuantity]=useState(1);

    //category field
    const[category,setCategory]=useState("produce");
 

    const increment = () =>{
        if (quantity < 20 ){
            setQuantity(quantity+1);
        }
        else{
            alert("Quantity should be equal to or less than 20.");
        }

    }

    const decrement = () =>{
        if (quantity> 1 ){
            setQuantity(quantity-1);
        }
        else{
            alert("Quantity should be at least 1.");
        }

    }

    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const uniqueId = generateUUID();

    const handleNameChange = (event) => setName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) =>{
        event.preventDefault();

        //create new item
        let newItem = {
            id:uniqueId,
            name:name,
            quantity:quantity,
            category:category,
        };
        onAddItem(newItem);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };


    let buttonStyles1 = "w-8 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 ml-1";
    let buttonStyles2 = "w-8 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 ml-1";

    if(quantity<2){
        buttonStyles1 = "bg-gray-400 w-8 text-black font-semibold rounded-lg shadow-md focus:outline-none ml-1";
    }
    if(quantity>19){
        buttonStyles2 = "bg-gray-400 w-8 text-black font-semibold rounded-lg shadow-md focus:outline-none ml-1";
    }

    return(

            <div className="max-w-sm m-4 p-4 bg-yellow-100 shadow-md rounded-lg" >
                <form className="flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
                    <input value={name} placeholder="item name" required onChange={handleNameChange} className="p-3 w-80 rounded border border-gray-300  bg-yellow-500 text-black placeholder-black"></input>
                    <div className="flex">
                        <div className="flex justify-center w-full ">
                        <div className="p-2 m-4 bg-yellow-500 text-black w-36 rounded h-30" >
                            <div className="flex justify-between">
                                <p>{quantity}</p>
                                <div className="flex">        
                                    <button type="button" className={buttonStyles2} onClick={increment}>+</button>
                                    <button type="button" className={buttonStyles1} onClick={decrement}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>

                        <select onChange={handleCategoryChange} value={category} className="h-30 w-full p-2 m-4 border border-gray-300 bg-yellow-500 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                            <option value="produce">Produce</option>
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
                    <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-700" >Submit</button>
                </form>
            </div>

    );

}