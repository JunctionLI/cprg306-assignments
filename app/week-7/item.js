
export default function Item({item}){


    return(
        <div className="p-2 m-4 bg-yellow-100 max-w-sm">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-sm">Buy {item.quantity} in {item.category} </p>
        </div>
    );
}