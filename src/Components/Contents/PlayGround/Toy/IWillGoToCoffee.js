import React, { useState } from "react";  
import "./IWillGoToCoffee.css"

 
 
export default function IWillGoToCoffee({ children }) {   
    return (
        <div className="coffee"> 
            <p><div ><span>커피</span> 하나만 사서 오겠습니다!</div></p>
            <p>음료 필요하시면 말씀해주세요!!</p>
        </div>
    )
}