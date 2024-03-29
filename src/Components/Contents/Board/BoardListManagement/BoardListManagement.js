import React from "react";    
import BoardItemvV2 from "./BoardItem/BoardItemV2";

export default function BoardListManagement({ boardList }) { 
     
    function handleClickNewPost() {   
        window.location.href = "/board/new"
    }
    return (
        <div className="boardlistmanagement">   
            
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">TITLE</th>
                <th scope="col">CONTENTS</th>
                <th scope="col">작성자</th>
                <th scope="col">작성일</th>
                </tr>
            </thead>
            <tbody>
                {boardList.map((board, idx) => { 
                        return <BoardItemvV2 key={idx} idx={idx} data={board} />
                    })}
            </tbody>
            </table>
            <button onClick={handleClickNewPost}>글쓰기</button>
        </div>
    )
}