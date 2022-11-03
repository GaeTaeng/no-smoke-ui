import React from "react";  
import BoardItem from "./BoardItem";

export default function BoardListManagement({ boardList }) { 
    return (
        <div className="boardlistmanagement">
            {boardList.map((board, idx) => {
                return <BoardItem key={idx} data={board} />
            })}
        </div>
    )
}