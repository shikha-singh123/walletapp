import React,{useState} from 'react'
import './Wallets.css'
import {arr} from './Data'
function AllWallets() {
    const [len,setLen] = useState(arr.length);
    return (
        <>
            <table className="theTable" align="center"  width="60%">
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Balance (Rs)</th>
                </tr>
                </thead>
                <tbody>
                    {arr.map((e,idx)=> {
                        return (
                            <tr key={idx}>
                                {e.map((ele,index)=>{
                                    return <td key={index}>{ele}</td>
                                })}
                            </tr>
                        )
                        })
                    }
                </tbody>
            </table>
            
        </>
    )
}

export default AllWallets;
