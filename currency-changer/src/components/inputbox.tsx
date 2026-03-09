
import FetchedData from "../hook/getCurrency";
export default function InputBox(){
    const data=FetchedData();
    const currencies=Object.keys(data)
    console.log(currencies)
    return(
        <>
        
            <div className="flex flex-row justify-between gap-2 bg-gray-300 shadow-lg shadow-indigo-300 rounded-lg p-3">
                <div className=" flex flex-col">
                    <label>Amount</label>
                    <input type="number"  placeholder="e.g.199" className=" rounded-sm hover:bg-white focus:border-0  indent-2"/>
                </div>
                <div className="flex flex-col">
                    <label>From Currency</label>
                    <select>
                        {currencies.map((currency:string)=>(<option key={currency}> {currency}</option>)
                        )}
                    </select>
                </div>
            </div>
      
        </>
    )
}