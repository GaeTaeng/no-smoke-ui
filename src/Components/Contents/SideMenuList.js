import React from "react";  
import "./SideMenuList.css" 
const MENU_LIST = [
    {label : "1번메뉴"},
    {label : "2번메뉴"},
    {label : "3번메뉴"},
    {label : "4번메뉴"},
    {label : "5번메뉴"},
    {label : "6번메뉴"}
]
export default function SideMenuList({ children }) { 
    const menu_size = MENU_LIST.length * 50 + 50
    return (
        <div className="side right menu list" style={{bottom : `${menu_size}px`}}>
            <ul>
                {MENU_LIST.map(menu => {
                    return <li className="item">{menu.label}</li>
                })}
            </ul>
        </div>
    )
}