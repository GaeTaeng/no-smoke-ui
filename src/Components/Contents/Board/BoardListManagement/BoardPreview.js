import React from "react";   
import BoardItemV2 from "./BoardItem/BoardItemV2";

import "./BoardPreview.css"
export default function BoardPreview({ boardList }) { 
    return (
        <div className="boardpreview"> 
            
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th className="col_title" scope="col">TITLE</th>
                    <th className="col_contents" scope="col">CONTENTS</th>
                    <th className="col_create_user_name" scope="col">작성자</th>
                    <th className="col_insert_timestamp" scope="col">작성일</th>
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