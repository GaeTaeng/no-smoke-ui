import React from "react";
import SEOMetaTag from "../../../SEOMetaTag";
import "./IWillGoToCoffee.css";

 /**

 og:url 
- URL 입니다. 링크될 URL을 지정하시면 됩니다. 
og:type 
- 타입을 지정합니다. 웹인지 앱인지 등등
og:title 
- 해당 링크의 제목 입니다. 카톡에서 가장 굵고 큰 글자로 보이겠죠
og:description 
- 설명입니다. 제목 아래 설명글씨로 주저리 담깁니다. 
og:image 
- 썸네일 이미지 입니다. http:// 부터 시작하는 절대 주소로 남기셔야 합니다.


  */
export default function IWillGoToCoffee({ children }) {   
 
    return (
        <div className="coffee"> 
            <SEOMetaTag title={"IWillGoToCoffee"} description={"커피하나만 사서올게요!\n음료 필요하면 말씀해주세요!"} imgsrc={"src/Components/Contents/PlayGround/Toy/IWillGoToCoffee.png"} url={"https://gaetaeng.xyz/coffee"}/>
            <p><div ><span>커피</span> 하나만 사서 오겠습니다!</div></p>
            <p>음료 필요하시면 말씀해주세요!!</p>
        </div>
    )
}