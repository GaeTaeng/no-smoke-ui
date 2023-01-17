import React, { useState } from "react";   
import SEOMetaTag from "../../SEOMetaTag"; 
export default function Setting({ children }) {  
    return (   
                
        <div className="contents">
            <SEOMetaTag title={"Setting"} description={"Setting"} imgsrc={"public/logo.png"} />
        </div>
    )
}