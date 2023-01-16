import React from "react";   
export default function TodoItem({ idx,data }) { 
    return (
        <tr key={idx+1}>
            <th scope="row">{idx+1}</th>
            <td>{data.title}</td>
            <td>{data.contents}</td> 
            <td>{data.etc}</td> 
            <td>{data.insert_timestamp}</td> 
            <td><input type="checkbox" checked={data.is_complete} disabled/></td>
        </tr> 
    )
}