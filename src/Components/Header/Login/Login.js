import React, { useEffect, useState } from "react"; 
import { testData } from "../../TestData";

import "./Login.css"
export default function Login({setUser}) { 

    // const handleClickLogin = (e) => { 
    //     setUser(testData[e.target.value])
    // }
    // function toggleSelectBox(selectBox) {
    //     selectBox.classList.toggle("active");
    //   }
      
    //   function selectOption(optionElement) {
    //     const selectBox = optionElement.closest(".select");
    //     const selectedElement = selectBox.querySelector(".selected-value");
    //     selectedElement.textContent = optionElement.textContent;
    //   }

    //   function handleClickSelectBox(e) {

    //   }
    //   useEffect(()=> {

    //   // Kakao.init('744e06b2794760aa9989c6828987a345'); //발급받은 키 중 javascript키를 사용해준다.
    //   // console.log(Kakao.isInitialized()); // sdk초기화여부판단
    //     const selectBoxElements = document.querySelectorAll(".select");

    //     selectBoxElements.forEach(selectBoxElement => {
    //         selectBoxElement.addEventListener("click", function (e) {
    //           const targetElement = e.target;
    //           const isOptionElement = targetElement.classList.contains("option");
          
    //           if (isOptionElement) {
    //             selectOption(targetElement);
    //           }
          
    //           toggleSelectBox(selectBoxElement);
    //         });
    //       });
    //   }, [])



      
    // <!-- 카카오 스크립트 --> 
    //카카오로그인
    const KakaoLogin = () =>  {
      const url = 'https://kauth.kakao.com/oauth/authorize?client_id=744e06b2794760aa9989c6828987a345' +
          // process.env.VUE_APP_KAKAO_JS_KEY +
          '&redirect_uri=https://gaetaeng.xyz/playground' +
          // process.env.VUE_APP_KAKAO_REDIRECT_URL +
          '&response_type=code&' +
          'scope=profile_nickname profile_image'
          window.location.href = url;
	  
    }
    //카카오로그아웃  
    // function kakaoLogout() {
    //     if (Kakao.Auth.getAccessToken()) {
    //       Kakao.API.request({
    //         url: '/v1/user/unlink',
    //         success: function (response) {
    //           console.log(response)
    //         },
    //         fail: function (error) {
    //           console.log(error)
    //         },
    //       })
    //       Kakao.Auth.setAccessToken(undefined)
    //     }
    //   }   

    
    return (
        <div className="login"> 

<ul>
                  <li onClick={() => KakaoLogin()}>
                      <a href="javascript:void(0)">
                          <span>카카오 로그인</span>
                      </a>
                  </li>
                  {/* <li onclick={() => kakaoLogout()}>
                      <a href="javascript:void(0)">
                          <span>카카오 로그아웃</span>
                      </a>
                  </li> */}
                </ul>
        </div>
    )
}