import Link from "next/link";
import ItemList from "./item-list";

export default function Week3Page(){
    return(
        <main>
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <ItemList/>
            <Link href="./" className="italic hover:underline hover:text-green-400">Back to Main</Link>
        </main>
    );
}