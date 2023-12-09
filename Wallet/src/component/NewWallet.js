import React,{useState} from 'react'
import './Wallets.css'
import {arr,arr2} from './Data'
import AllWallets from './AllWallets'

function NewWallet() {
    const [added,setAdded] = useState(false);
    const [name,setName] = useState("");
    const [phone,setPhone] = useState(null);
    const [amount,setAmount] = useState(null);
    const changingName = (e) => {
            setName(e.target.value);
    }
    const changingPhone = (e) => {
        setPhone(e.target.value);
    }
    const changingAmount = (e) => {
        setAmount(e.target.value);
    }
    const addingNewWallet = (e) =>{
        e.preventDefault();
        if(typeof(name) === "string" && phone.length == 10){
            let newArr= [arr[arr.length-1][0]+1,name,phone,amount];
            arr.push(newArr);
            let d = new Date().toLocaleDateString();
            let t = new Date().toLocaleTimeString();
            let arr3 = [name,d,t,"+"+amount,amount];
            arr2.push(arr3);
            alert("New wallet Added");
            setAdded(!added);
        }else{
            alert("Invalid Input!")
        }
    }
    return (
        <>
        <div className="inputBox" >
            <form onSubmit={addingNewWallet}>
                <input type="text"  placeholder="Name" onChange={changingName} required/>
                <br/>
                <input type="number" minLength="10" maxLength="10" placeholder="Phone Number" onChange={changingPhone} required/>
                <br/>
                <input type="number" required placeholder="Amount (RS)"onChange={changingAmount}/>
                <br/>
                <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>
        
        </>
    )
}

export default NewWallet;
