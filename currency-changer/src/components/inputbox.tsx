interface InputBoxProps {
  label: string;
  amount: number;
  onChangeAmount: (val: number) => void;
  onSelectCurrency: (e: any) => void;
  selectedCurrency: string; // Pass the specific one (from or to)
  currencies: string[];
  convertedCurrency: number;
}

export default function InputBox({ 
  label, 
  amount, 
  onChangeAmount, 
  onSelectCurrency, 
  selectedCurrency, 
  currencies, 
  convertedCurrency 
}: InputBoxProps){
    
    return (
        <div className="flex flex-row justify-between gap-2 bg-gray-300 shadow-lg shadow-indigo-300 rounded-lg p-3">
            <div className="flex flex-col">
                <label className="text-gray-700 mb-1">Amount</label>
          <input
  type="number"
  value={label === "To" ? convertedCurrency : amount}
  disabled={label === "To"}
  onChange={(e)=>onChangeAmount(Number(e.target.value))}
/>
            </div>
            <div className="flex flex-col">
                <label className="text-gray-700 mb-1">
                    {label} Currency
                </label>
           <select 
          value={selectedCurrency} 
          onChange={onSelectCurrency}
          className="rounded-md bg-white p-1"
       >
         {currencies.map(c => <option key={c} value={c}>{c.toUpperCase()}</option>)}
       </select>
            </div>
        </div>
    );
}