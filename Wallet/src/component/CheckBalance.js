import React,{useState} from 'react'
import {arr} from './Data'
function CheckBalance() {
    const [selectedName,setSelectedName] = useState("");
    const [ans,setAns] = useState("");

    const handleChange = (e) => {
        setSelectedName(e.target.value);
    }
    const getBalance = (e) => {
        e.preventDefault();
        {arr.map((ele,idx)=>{
            return ele[1]===selectedName?setAns(ele[3]):null
            
        })}
    }

    return (
        <>
        <div className="checkBalanceWrapper">
            <select name="name" value={selectedName} onChange={handleChange}>
            <option value="Select a user" selected>Select a user</option>
                {arr.map((ele,idx)=>{
                    return (<option key={idx} value={ele[1]}>{ele[1]}</option>)
                })}
            </select>
             <br/>
            <button className="submitButton" onClick={getBalance}>Get Balance</button>
        </div>
        {ans !== ""? <h5 className="yourBalance">Balance: {ans}</h5>:null}
        </>
    )
}

export default CheckBalance;
