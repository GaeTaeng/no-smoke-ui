import React from "react";  
import "./Contents.css"
import GoogleAdvertise from "./GoogleAdvertise/GoogleAdvertise";

export default function Contents({ children }) { 
    return (
        <div className="contents">
            {children}  
            <GoogleAdvertise 
            client="ca-pub-1845636451573321"
            slot="9122556482"
            format="auto"
            responsive="true" />
            </div>
    )
}