import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import ExampleA from "./Example/ExampleA";
import ExampleB from "./Example/ExampleB";
import PlayGroundMenu from "./PlayGroundMenu";
 

const MENU_LIST = [
    {txt : "ExampleA", component : <ExampleA />},
    {txt : "ExampleB", component : <ExampleB />},
]
export default function PlayGround({ children }) { 
    const [idx_menu, setIdxMenu] = useState(0); 
    return (
        <div>
            
            {/* Playground Menu영역 Start */}
            <PlayGroundMenu MENU_LIST={MENU_LIST} idx_menu={idx_menu} setIdxMenu={setIdxMenu}/>
            {/* Playground Menu영역 End */}

            <div className="Description">
                마음대로 만들어두면 나중에 구조바꾸고 이런거 가르쳐줄게요
                <br /><br /><br />
                <ol>
                    !지켜야할 것!
                    <li> 뭔가 만들고싶은게 생길 때 PlayGround 폴더안에 새로운 폴더 생성 후 그 안에 js파일 생성</li>
                    <li> 만든다음 상단의 MENU_LIST에 추가</li>
                </ol>
                <hr />
            </div>

            <div className="contents">
                {MENU_LIST[idx_menu].component}
            </div>

        </div>
    )
}