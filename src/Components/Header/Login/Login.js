import React, { useEffect, useState } from "react"; 
import { testData } from "../../TestData";

import "./Login.css"
export default function Login({setUser}) { 

    const handleClickLogin = (e) => { 
        setUser(testData[e.target.value])
    }
    function toggleSelectBox(selectBox) {
        selectBox.classList.toggle("active");
      }
      
      function selectOption(optionElement) {
        const selectBox = optionElement.closest(".select");
        const selectedElement = selectBox.querySelector(".selected-value");
        selectedElement.textContent = optionElement.textContent;
      }

      function handleClickSelectBox(e) {

      }
      useEffect(()=> {
        const selectBoxElements = document.querySelectorAll(".select");

        selectBoxElements.forEach(selectBoxElement => {
            selectBoxElement.addEventListener("click", function (e) {
              const targetElement = e.target;
              const isOptionElement = targetElement.classList.contains("option");
          
              if (isOptionElement) {
                selectOption(targetElement);
              }
          
              toggleSelectBox(selectBoxElement);
            });
          });
      }, [])
    return (
        <div className="login"> 
            <div className="select">
                <div className="selected">
                    <div className="selected-value">사용자를 선택하여주세요.</div>
                    <div className="arrow"></div>
                </div>
                <ul>
                    {testData.map((user, idx) => { 
                            return <li key={idx} className="option" onClick={handleClickLogin} value={idx}>{user.name}</li>

                        })}   
                </ul>
            </div>  
        </div>
    )
}