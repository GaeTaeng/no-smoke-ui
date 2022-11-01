import React from "react"; 

export default function Footer({ children }) { 
    return (
        <div style={{position:"absolute", bottom : "0px", height:"120px", background:"##8d8d8d", width :"100%", borderTop:"1px solid gray"}}>  
            {children} 
        </div>
    )
}