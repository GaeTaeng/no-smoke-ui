import React, { useState } from "react";   
import TodoItem from "./TodoItem";
 

const TODO_LIST = [
    {title : "zustand 적용", contents : "redux 대체품", etc : "", insert_timestamp : "2022.11.06"}, 
]
export default function Todo({ children }) {  
    return (   
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">CONTENTS</th>
                    <th scope="col">비고</th>
                    <th scope="col">작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {TODO_LIST.map((todo, idx) => {
                            return <TodoItem idx={idx} data={todo} />
                        })}
                </tbody>
                </table> 
    )
}