import React from "react";
import { useNavigate } from "react-router-dom";
import "./SideMenuList.css";
const MENU_LIST = [
    {label : "홈", className : "newWrite", url : "/home"},
    {label : "작성", className : "newWrite", url : "/board"},
    {label : "Back", className : "newWrite", url : -1},
]
export default function SideMenuList({ children }) { 
    // const menu_size = MENU_LIST.length * 50 + 50

    const navigate = useNavigate();
    return (
        <div className="side right menu list">
            <ul>
                {MENU_LIST.map((menu, idx) => {
                    return <li key={`side_menu_${idx}`} className="item">
                        <div className={`${menu.className}`} onClick={()=>navigate(menu.url)}>{menu.label}</div>
                    </li>
                })}
            </ul>
        </div>
    )
}