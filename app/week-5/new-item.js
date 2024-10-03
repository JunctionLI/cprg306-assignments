
export default function NewItem({currentQuantity,incrementFunction,decrementFunction}){

    let buttonStyles1 = "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-1";
    let buttonStyles2 = "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-1";

    if(currentQuantity<2){
        buttonStyles1 = "bg-gray-400 w-8 text-white font-semibold rounded-lg shadow-md focus:outline-none ml-1";
    }
    if(currentQuantity>19){
        buttonStyles2 = "bg-gray-400 w-8 text-white font-semibold rounded-lg shadow-md focus:outline-none ml-1";
    }


    return(
        <div className="flex justify-center w-full ">
            <div className="p-2 m-4 bg-slate-600 text-white w-36 rounded h-30" >
                <div className="flex justify-between">
                    <p>{currentQuantity}</p>
                    <div className="flex">        
                        <button type="button" className={buttonStyles2} onClick={incrementFunction}>+</button>
                        <button type="button" className={buttonStyles1} onClick={decrementFunction}>-</button>
                    </div>
                </div>
            </div>
        </div>

    );

}