import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../Board/Board"; 
import "./Home.css"; 



const DEV_TEST_DATA = [
    
    {
        title : "꼬맨틀 매크로 만들기",
        contents : "https://gaetaeng.tistory.com/56",
        create_user_name : "김태훈",
        insert_timestamp : "2023.01.25 16:29",
    },
]


export default function Home({ children }) { 
    // const menu_size = MENU_LIST.length * 50 + 50

    const [boardList, setBoardList] = useState(DEV_TEST_DATA);
    const navigate = useNavigate();
    return (
        <div className="home"> 

        <Board boardList={boardList} is_preview={true}/>
        <Board boardList={boardList} is_preview={true}/>
        <Board boardList={boardList} is_preview={true}/>
        <Board boardList={boardList} is_preview={true}/>
        </div>
    )
}