
export default function Item({itemObj}){

    const {name,quantity,category} = itemObj;

    return(
        <div className="p-2 m-4 bg-yellow-100 max-w-sm">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm">Buy {quantity} in {category} </p>
        </div>
    );
}