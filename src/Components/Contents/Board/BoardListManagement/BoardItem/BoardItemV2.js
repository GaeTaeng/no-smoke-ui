import React from "react";    
export default function BoardItemV2({ idx,data }) { 
    return (
        <tr key={idx+1}>
            <th scope="row">{idx+1}</th>
            <td className="col_title">{data.title}</td>
            <td className="col_contents">{data.contents}</td>
            <td className="col_create_user_name">{data.create_user_name}</td>
            <td className="col_insert_timestamp">{data.insert_timestamp}</td>
        </tr> 
    )
}