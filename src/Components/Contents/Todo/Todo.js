import React, { useState } from "react";   
import TodoItem from "./TodoItem";
 

const TODO_LIST = [
    {title : "zustand 적용", contents : "", etc : ""},
    {title : "zustand 적용", contents : "", etc : ""}, 
]
export default function Todo({ children }) {  
    return (   
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
                    {TODO_LIST.map((todo, idx) => {
                            return <TodoItem idx={idx} data={todo} />
                        })}
                </tbody>
                </table> 
    )
}