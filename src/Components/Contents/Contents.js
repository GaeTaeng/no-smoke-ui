import React from "react";  
import "./Contents.css"

export default function Contents({ children }) { 
    return (
        <div className="contents">
            {children}  
            </div>
    )
}