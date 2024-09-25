"use client"
import {useState} from "react";
import NewItem from "./new-item";
import Link from "next/link";


export default function QualityCountPage(){

    const[quantity ,setQuantity]=useState(1);

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

    return(
        <main>
            <NewItem currentQuantity={quantity} incrementFunction={increment} decrementFunction={decrement} />
            <Link href="./" className="italic hover:underline hover:text-green-400 ">Back to Main</Link>
        </main>
    );
}