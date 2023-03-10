import React, { useEffect, useState } from "react";
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
 

    const [imageUrl, setImageUrl] = useState();
    const handleClickLogin = (user) => { 
        sessionStorage.setItem('user', JSON.stringify(user));
        console.log("user : ", user)
        setUser(user)
    }

    const loadImg = (event) => { 
        let value = URL.createObjectURL(event.target.files[0]); 
        setImageUrl(value);
    }
 
    return (
        <div> 
             <Header >
                <Menu />
                {/* <Login  setUser={(user) => handleClickLogin(user)}/> */}
             </Header>
             
            <Contents >
                {children}

            {/* <label for="profile">이미지를 선택하세요:
                <input type="file" name="image" onChange={(e) => loadImg(e)}/>
                <img src={imageUrl} name="viewimg" id="previewimg" alt="" style={{width:"50px", height:"50px", border:"1px solid black"}}/>
            </label> */}
            </Contents>



            <Footer> 
                <a className="footer_font" href="mailto: nuckly60@gmail.com,jyj6010@gmail.com" title="두둥탁">의견보내기</a> 
            </Footer>
        </div>
    )
}