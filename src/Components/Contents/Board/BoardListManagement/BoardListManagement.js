import React from "react";  
import BoardItem from "./BoardItem/BoardItem";

export default function BoardListManagement({ boardList }) { 
    return (
        <div className="boardlistmanagement"> 

            <div className="container text-center">
                <div className="row">
                    <div className="col col-md-2 title">TITLE</div><div className="col col-md-7 title">CONTENTS</div><div className="col col-md-1 title">작성자</div><div className="col col-md-2 title">작성일</div>
                </div>
                {boardList.map((board, idx) => {
                    console.log("board : ", board)
                    return <BoardItem key={idx} data={board} />
                })}
            </div> 
        </div>
    )
}