import { useEffect, useState } from "react";
import axios from "axios";


export default function FetchedData(){
    const [data,setData]=useState({})
    const currency='inr'
       const FetchedData=async()=>{
            const response = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            const data=response.data;
            return setData(data[currency])
        }
    useEffect(()=>{
     FetchedData();
    },[currency]);
    return data;
}