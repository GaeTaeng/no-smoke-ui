import React from "react";
import Footer from "./Footer/Footer"; 
import Header from "./Header/Header";
import Menu from "./Header/Menu/Menu";

export default function MainContainer({ children }) {
    console.log("children : ", children)
    return (
        <div> 
             <Header >
                <Menu />
             </Header>
            <div>
                {children}
            </div>
            <Footer>
                <div>FOOTER</div>
            </Footer>
        </div>
    )
}