import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Menu.css"

const MENU_LIST = [
    {txt : "Board", url : "board"},
    {txt : "Home", url : ""},
    {txt : "Setting", url : "setting"},
    {txt : "잼민's 놀이터", url : "palyground"},
]

const Menu = () => {
    const [idx_menu, setIdxMenu] = useState(1); 
    const location = useLocation();
    function handleClickMenu(idx) { 
        setIdxMenu(idx) 
        console.log("location : ", location)
    }
    return ( 
            <div className="container text-center">
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