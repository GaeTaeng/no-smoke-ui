import React from "react";
import Contents from "./Contents/Contents";
import Footer from "./Footer/Footer"; 
import Header from "./Header/Header";
import Menu from "./Header/Menu/Menu";

import "./MainContainer.css"

export default function MainContainer({ children }) {
    console.log("children : ", children)
    return (
        <div> 
             <Header >
                <Menu />
             </Header>
             
            <Contents >
                {children}
            </Contents>

            <Footer>
                <div>FOOTER</div>
            </Footer>
        </div>
    )
}