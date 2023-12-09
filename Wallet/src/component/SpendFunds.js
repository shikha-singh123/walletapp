import React ,{useState} from 'react'
import {arr,arr2} from './Data'

function SpendFunds() {
    const [selectedName,setSelectedName] = useState("");
    const [number,setNumber] = useState(0);
    const handleChange = (e) => {
        setSelectedName(e.target.value);
    }
    const settingNumber = (e) =>{
        setNumber(e.target.value);
    }
    const adding = (e) =>{
        e.preventDefault();
        {arr.map((ele,idx)=>{
            return ele[1]===selectedName?ele[3] = Number(parseFloat(ele[3])-parseFloat(number)).toFixed(2):null
            
        })}
        let d = new Date().toLocaleDateString();
        let t = new Date().toLocaleTimeString();
        {arr2.map((ele,idx)=>{
            return ele[0]===selectedName?(ele[1] = d , ele[2] = t, ele[3] = "-"+number,ele[4] = Number(parseFloat(ele[3])-parseFloat(number)).toFixed(2)):null
            
        })}
        alert("Amount deducted!")
    }
    return (
        <div>
            <div className="spendFunds">
            <select name="name" value={selectedName} onChange={handleChange}>
            <option value="Select a user" selected>Select a user</option>
                {arr.map((ele,idx)=>{
                    return (<option key={idx} value={ele[1]}>{ele[1]}</option>)
                })}
            </select>
            <br/>
            <input type="number" onChange={settingNumber} required placeholder="Amount (RS)"/>
            <br/>
            <button onClick={adding} className="submitButton">Submit</button>
        </div>
        </div>
    )
}

export default SpendFunds;
