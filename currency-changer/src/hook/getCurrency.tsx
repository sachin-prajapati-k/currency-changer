import { useEffect, useState } from "react";
import axios from "axios";

export default function useCurrency(currency: string) {
  const [data, setData] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await axios.get(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );

        setData(response.data[currency]);
      } catch (error) {
        console.error("Currency fetch error:", error);
      }
    };

    fetchCurrency();
  }, [currency]);

  return data;
}