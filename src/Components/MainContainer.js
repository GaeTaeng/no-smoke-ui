import React, { useState } from "react";
import Contents from "./Contents/Contents";
import Footer from "./Footer/Footer"; 
import Header from "./Header/Header";
import Login from "./Header/Login/Login";
import Menu from "./Header/Menu/Menu"; 
import "./MainContainer.css"
import { InitTestData, testData } from "./TestData";
import "./Footer/Footer.css";



export default function MainContainer({ children }) {  
    const [user, setUser] = useState(InitTestData);  
 
    const handleClickLogin = (user) => { 
        sessionStorage.setItem('user', JSON.stringify(user));
        console.log("user : ", user)
        setUser(user)
    }
    return (
        <div> 
             <Header >
                <Menu />
                <Login  setUser={(user) => handleClickLogin(user)}/>
             </Header>
             
            <Contents >
                {children}
            </Contents>

            <Footer>
                <a className="footer_font" href="mailto: jyj6010@gmail.com" title="두둥탁">의견보내기</a>
            </Footer>
        </div>
    )
}