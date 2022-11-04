import React, { useState } from "react";   
 

const PlayGroundMenu = ({MENU_LIST, idx_menu, setIdxMenu}) => {   
    return ( 
            
            <div className="container text-center">
            <div className="row">
                {MENU_LIST.map((menu, idx) => {
                    return <div key={idx} className={`col menu ${idx_menu === idx ? "select" : ""}`} onClick={() => setIdxMenu(idx)}>
                                    {menu.txt}
                                <hr/>       
                            </div>
                })} 
                
            </div>
        </div> 
    );
  };

  export default PlayGroundMenu;