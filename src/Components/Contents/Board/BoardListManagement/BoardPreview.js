import React from "react";   
import BoardItemV2 from "./BoardItem/BoardItemV2";

import "./BoardPreview.css"
export default function BoardPreview({ boardList }) { 
    return (
        <div className="boardpreview">
            
            <div className="Description">
                2. Table BootStrap을 이용한 방식
            </div>
            
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
                            return <BoardItemV2 key={`board_item_${idx}`} idx={idx} data={board} />
                        })}
                </tbody>
            </table>

        </div>
    )
}