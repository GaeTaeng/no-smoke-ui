import React, { useState } from "react";   
import SEOMetaTag from "../../SEOMetaTag";
import TodoItem from "./TodoItem";
 

const TODO_LIST = [ 
    {is_complete : false, title : "zustand 적용", contents : "redux 대체품", etc : "", insert_timestamp : "2022.11.06"}, 
    {is_complete : true, title : "react-helmet-async 적용", contents : "동적으로 Meta Tag세팅을 도와줌", etc : "", insert_timestamp : "2023.01.16"}, 
    {is_complete : false, title : "SNB LIST Props로 분기처리", contents : "SNB LIST Props로 분기처리", etc : "", insert_timestamp : "2023.01.18"}, 
    {is_complete : false, title : "Back API 설정", contents : "Spring Boot JPA", etc : "", insert_timestamp : "2023.01.18"},  
    {is_complete : false, title : "메인화면 게시글 미리보기 레이아웃 추가", contents : " ", etc : "", insert_timestamp : "2023.01.23"},  
]
export default function Todo({ children }) {  
    return (   
                <table className="table">
                <SEOMetaTag title={"TODO"} description={"Feature"} imgsrc={"public/logo.png"} />
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">CONTENTS</th>
                    <th scope="col">비고</th>
                    <th scope="col">작성일</th> 
                    <th scope="col">완료</th> 
                    </tr>
                </thead>
                <tbody>
                    {TODO_LIST.map((todo, idx) => { 
                            return <TodoItem key={`key_${idx}`} idx={idx} data={todo} /> 
                        })}
                </tbody>
                </table> 
    )
}