import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase";


export async function addItem(userId, item){
    try {
        const itemsReference  = collection(db, "users", userId, "items");
        const newItemPromise  = await addDoc(itemsReference, item);
        console.log(newItemPromise.id);
    } catch (error) {
        console.log(error);
    }
}


export async function getAllItems(userId, itemPostListStateSetter){
    try {
        const itemsReference = collection(db, "users", userId, "items");
        const itemsQuery  = query(itemsReference);
        const querySnapshot = await getDocs(itemsQuery);
        let itemsList  = [];
        querySnapshot.forEach( (doc) => {
            let item = {
                id: doc.id,
                ...doc.data()
            }
            itemsList.push(item);
            itemPostListStateSetter(itemsList);
        } );

    } catch (error) {
        console.log(error);
    }
}



export async function getItems(userId,itemPostListStateSetter){
    try {
        const itemsReference  = collection(db, "users", userId, "items");
        const itemsQuery  = query(itemsReference);
        const querySnapshot = await getDocs(itemsQuery);
        let itemsList  = [];
        querySnapshot.forEach( (doc) => {
            let item  = {
                id: doc.id,
                ...doc.data()
            }
            itemsList.push(item);
            itemPostListStateSetter(itemsList);          
        } );

    } catch (error) {
        console.log(error);
    }
}

