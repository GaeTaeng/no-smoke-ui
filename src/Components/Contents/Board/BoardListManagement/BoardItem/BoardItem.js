import React from "react";   
export default function BoardItem({ data }) { 
    return (
        <div className="row boarditem">
            <div className="col col-md-2 content">{data.title} <hr /></div>
            <div className="col col-md-7 content">{data.contents} <hr /></div>
            <div className="col col-md-1 content">{data.create_user_name} <hr /></div>
            <div className="col col-md-2 content">{data.insert_timestamp} <hr /></div>
        </div>
    )
}