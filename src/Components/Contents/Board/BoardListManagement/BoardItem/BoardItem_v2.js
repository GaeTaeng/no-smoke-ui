import React from "react";   
export default function BoardItem_v2({ idx,data }) { 
    return (
        <tr>
            <th scope="row">{idx+1}</th>
            <td>{data.title}</td>
            <td>{data.contents}</td>
            <td>{data.create_user_name}</td>
            <td>{data.insert_timestamp}</td>
        </tr> 
    )
}