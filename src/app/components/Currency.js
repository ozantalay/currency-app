"use client"
import '@/app/css/currency.css'
import { useState } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios"
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const Currency = () => {
  const [amount,setAmount]=useState("")
  const [from,setFrom]=useState("USD")
  const [toCurrency,setToCurrency]=useState('TRY')
  const [result,setResult]=useState(0)

  let URL="https://api.freecurrencyapi.com/v1/latest"
  let API_KEY="fca_live_bLtrsG86JBglOm2ScZa8qmQcm5Ysx5eZH1qcsYRk"

  const exchange =async ()=>{
    // console.log(amount);
    // console.log(from);
    // console.log(toCurrency);
    // console.log(result);
    try{

      
      const response = await axios.get(`${URL}?apikey=${API_KEY}&base_currency=${from}`)
      console.log(response.data.data[toCurrency]);
      setResult((response.data.data[toCurrency]*amount).toFixed(2))
    }catch(error){
      console.log("veriyi çekerken hata meydana geldi",error)
    }
  }

  return (
    <div className="currency-div">
      <div style={{ backgroundColor:"green", color:"white", height:"30px",width:"100%",textAlign:"center",paddingBottom:"20px" , borderRadius:"10px", border:"1px solid black"}} >
        <h3 >Döviz Kuru Uygulaması 💰 </h3>
        
      </div>

      <div style={{marginTop:'40px'}}>
      <input
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}
      
      type="number" className="amount"
      />
        <select 
        value={from}
        onChange={(e)=>setFrom(e.target.value)}
        
        className="from-currency-option">
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
        </select>

        <FaArrowCircleRight style={{fontSize:"25px", color:"green", marginRight:"7px",paddingTop:"10px"}} />

        <select 
        onChange={(e)=>setToCurrency(e.target.value)}
        className="to-currency-option">
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>

        <input 
        value={result}
        onChange={(e)=>setResult(e.target.value)}
        type="number" className="result"/>

      </div>
      <div>
      <button 
      onClick={exchange}
      
      className='button'>Çevir</button>
        </div>

      
        

    </div>
  )
}
export default Currency