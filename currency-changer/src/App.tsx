import { useCallback, useEffect, useMemo, useState } from "react";
import InputBox from "./components/inputbox";
import useCurrency from "./hook/getCurrency";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [amount, setAmount] = useState(0);
  const [convertedCurrency, setConvertedCurrency] = useState(0);
  
  // Get data based on 'fromCurrency'
const data = useCurrency(fromCurrency) || {};
  const currencies = useMemo(() => Object.keys(data), [data]);

  const converter = useCallback(() => {
    const rates = data as Record<string, number>;
    // Check if the target currency exists in the current data
    if (rates && rates[toCurrency]) {
      const rate = rates[toCurrency];
      setConvertedCurrency(amount * rate);
    }
  }, [amount, data, toCurrency]);

  // console.log(convertedCurrency)
  useEffect(() => {
    converter();
  }, [converter]); // converter already has amount, data, and toCurrency as deps

  const swap = () => {
    // We use temporary variables to avoid stale state issues during the swap
    const prevFrom = fromCurrency;
    const prevTo = toCurrency;
    const prevConverted = convertedCurrency;

    setFromCurrency(prevTo);
    setToCurrency(prevFrom);
    setAmount(prevConverted);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100 p-4">
      <div className='flex flex-col gap-4 w-full max-w-md'>
        <InputBox 
          label="From" 
          amount={amount}
          onChangeAmount={setAmount} 
          onSelectCurrency={(e) => setFromCurrency(e.target.value)} 
          selectedCurrency={fromCurrency}
          currencies={currencies} 
          convertedCurrency={convertedCurrency}
        />

        <div className="relative w-full h-2 flex justify-center items-center">
          <button 
            onClick={swap} 
            className='absolute z-10 bg-purple-800 text-white px-4 py-2 rounded-lg border-2 border-white hover:bg-purple-900 shadow-md transition-all active:scale-95'
          >
            Swap
          </button>
        </div>

        <InputBox 
          label="To" 
          amount={amount}
          onChangeAmount={setAmount} 
          onSelectCurrency={(e) => setToCurrency(e.target.value)} 
          selectedCurrency={toCurrency}
          currencies={currencies} 
          convertedCurrency={convertedCurrency}
        />
      </div>
    </div>
  );
}