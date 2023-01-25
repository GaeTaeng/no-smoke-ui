import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../Board/Board";
import BoardPreview from "../Board/BoardListManagement/BoardPreview";
import "./Home.css"; 



const DEV_TEST_DATA = [
    {
        title : "1번 게시글 입니닷",
        contents : "1번 내용 입니닷",
        create_user_name : "김태훈",
        insert_timestamp : "2022.11.03 11:35",
    },
    {
        title : "2번 게시글 입니닷",
        contents : "2번 내용 입니닷",
        create_user_name : "정유진",
        insert_timestamp : "2022.11.03 16:35",
    },
    {
        title : "3번 게시글 입니닷",
        contents : "3번 내용 입니닷",
        create_user_name : "이소현",
        insert_timestamp : "2022.11.03 18:35",
    },
    {
        title : "배고파",
        contents : "밥줘",
        create_user_name : "김보연",
        insert_timestamp : "2022.11.04 13:31",
    }
]


export default function Home({ children }) { 
    // const menu_size = MENU_LIST.length * 50 + 50

    const [boardList, setBoardList] = useState(DEV_TEST_DATA);
    const navigate = useNavigate();
    return (
        <div className="home"> 
             <Board boardList={boardList} is_preview={true}/>
        </div>
    )
}