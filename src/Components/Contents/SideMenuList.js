import React from "react";
import "./SideMenuList.css";
const MENU_LIST = [
    {label : "작성", className : "newWrite"},
    {label : "2번", className : "newWrite"},
    {label : "3번메뉴", className : "newWrite"},
    {label : "4번메뉴", className : "newWrite"},
    {label : "5번메뉴", className : "newWrite"},
    {label : "6번메뉴", className : "newWrite"}
]
export default function SideMenuList({ children }) { 
    // const menu_size = MENU_LIST.length * 50 + 50
    return (
        <div className="side right menu list">
            <ul>
                {MENU_LIST.map(menu => {
                    return <li className="item">
                        <a className={`${menu.className}`} href={"/"}>{menu.label}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}