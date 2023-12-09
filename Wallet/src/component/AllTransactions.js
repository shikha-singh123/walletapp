import React from 'react'
import {arr2} from './Data'
function AllTransactions() {
    return (
        <div>
            <>
            <table className="theTable" align="center"  width="60%">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Amount (Rs)</th>
                    <th>Balance (Rs)</th>
                </tr>
                </thead>
                <tbody>
                {arr2.map((e,idx)=> {
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
        </div>
    )
}

export default AllTransactions;
