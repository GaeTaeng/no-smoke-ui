import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Menu.css"

const MENU_LIST = [
    {txt : "Board", url : "board"},
    {txt : "Home", url : ""},
    {txt : "숫자야구게임", url : "bullsandcows"},
    {txt : "Setting", url : "setting"},
    {txt : "TODO", url : "todo"}, 
    {txt : "newsflash", url : "playground"}, 
    {txt : "COFFEE", url : "coffee"}, 
]

const Menu = () => {
    const [idx_menu, setIdxMenu] = useState(1); 
    const location = useLocation();
    function handleClickMenu(idx) { 
        setIdxMenu(idx) 
        console.log("location : ", location)
    }
    useEffect(() => {
        MENU_LIST.forEach((menu, idx) => {
            if(location.pathname === "/".concat(menu.url)) {
                setIdxMenu(idx);
            }
        })
      }, []);
    return ( 
            <div className="container text-center menulist">
                <div className="row">
                    {MENU_LIST.map((menu, idx) => {
                        return <Link key={idx} to={menu.url} className={`col menu ${idx_menu === idx ? "select" : ""}`} onClick={() => handleClickMenu(idx)}>
                                    <div   >
                                        {menu.txt}
                                    </div> 
                                    <hr/>       
                                </Link>
                    })} 
                </div>
            </div> 
    );
  };

  export default Menu;