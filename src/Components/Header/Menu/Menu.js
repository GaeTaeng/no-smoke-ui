import React, { useState } from "react"; 
import "./Menu.css"

const MENU_LIST = [
    {txt : "Board", url : "board"},
    {txt : "Home", url : ""},
    {txt : "Setting", url : "setting"},
]

const Menu = () => {
    const [idx_menu, setIdxMenu] = useState(1);

    function handleClickMenu(idx) { 
        setIdxMenu(idx)
    }
    return ( 
            <div className="container text-center">
                <div className="row">
                    {MENU_LIST.map((menu, idx) => {
                        return <div key={idx} className={`col menu ${idx_menu === idx ? "select" : ""}`} onClick={() => handleClickMenu(idx)}>
                                    {menu.txt}
                                </div> 
                    })} 
                    <hr/> 
                </div>
            </div> 
    );
  };

  export default Menu;