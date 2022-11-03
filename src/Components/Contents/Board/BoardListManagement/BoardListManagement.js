import React from "react";  
import BoardItem from "./BoardItem/BoardItem";
import BoardItem_v2 from "./BoardItem/BoardItem_v2";

export default function BoardListManagement({ boardList }) { 
    return (
        <div className="boardlistmanagement"> 
        <hr/>
        <div className="Description">
            아래와 같이 총 2가지 방법으로 개발 가능.(더있지만 귀찮..) <br /><br />
        </div>
        <div className="Description">
            DIV BootStrap을 이용한 방식
        </div>
        
        
            <div className="container text-center">
                <div className="row">
                    <div className="col col-md-2 title">TITLE</div><div className="col col-md-7 title">CONTENTS</div><div className="col col-md-1 title">작성자</div><div className="col col-md-2 title">작성일</div>
                </div>
                {boardList.map((board, idx) => {
                    console.log("board : ", board)
                    return <BoardItem key={idx} data={board} />
                })}
            </div>  
            <div className="Description">
                Table BootStrap을 이용한 방식
            </div>
            
            <table class="table">
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
                        console.log("board : ", board)
                        return <BoardItem_v2 idx={idx} data={board} />
                    })}
            </tbody>
            </table>
        </div>
    )
}