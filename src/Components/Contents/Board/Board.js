import dayjs from "dayjs";
import React, { useEffect, useState } from "react";  
import SEOMetaTag from "../../SEOMetaTag";
import BoardListManagement from "./BoardListManagement/BoardListManagement"; 
import BoardPreview from "./BoardListManagement/BoardPreview";

const BOARD_ITEM_INIT = {
    title : "",
    contents : "",
    create_user_name : "",
    insert_timestamp : dayjs(),
}


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
export default function Board({ children, type, is_preview }) { 
    const [boardList, setBoardList] = useState(DEV_TEST_DATA);


    /** 최초진입, 상태업데이트(등록, 수정, 삭제 등) 발생 시 호출 진행 */
    function getBoardList() {
        //BOARD_ITEM_INIT에서는 is_selected값이 없지만 API상에서 is_selected key를 추가해서 전달할 예정.(default false)

    }

    function handleCreateBoardItem() {
        //게시글 등록 페이지를 따로 구현하여(구조적으로 어떻게할지 물어보고싶으면 물어보세옹) 해당페이지에서 등록을 누를 시 해당 함수를 호출.
        //바로 생성 API 호출 (POST)
        //이후 뭐 state의 뒤에 저장된 데이터를 갖다 붙이는게 아닌 getBoardList함수를 새로 호출 진6행

    }

    function handleUpdateBoardItem(boardData) {
        //boardData안에 해당 게시글의 넘버(시퀀스등의 Unique Key)를 받아와서 해당 boardData와 함께 한번에 API로 전송 (PUT)
        //수정 이후 해당 state값을 변경하는게 아니라 getBoardList를 호출하여 신규 호출 진행
    }

    /** SelectBox를 구성하여 선택되어있는 친구 삭제 API 호출 */
    function handleDeleteBoardItem() {
        const selected_board_list = boardList.filter(board => board.is_selected === true)
    }

    useEffect(() => {
        // 최초 진입 시 API를 통하여 게시판 리스트를 호출해옵니다.
        getBoardList();
      }, []);

    return (
        <div className="board"> 
            <SEOMetaTag title={"게시판"} description={"게시판"} imgsrc={"public/logo.png"} url={"https://gaetaeng.xyz/board"}/>
            {
                is_preview ? <BoardPreview  boardList={boardList}/> :
                <BoardListManagement is_preview={is_preview} boardList={boardList}/>
            }    
        </div>
    )
}