import React, { useState } from "react";  

    const NEWS_LIST = [
        {
            no: 1,
            title : "zustand 적용", 
            type : "속보", 
            content :"솰라솰라솰라",  
            insert_timestamp : "2022.11.06"
        }, 
        {
            no: 2,
            title : "zustand 적용", 
            type : "속보", 
            content :"솰라솰라솰라",  
            insert_timestamp : "2022.11.06"
        }, 
        {
            no: 3,
            title : "zustand 적용", 
            type : "속보", 
            content :"솰라솰라솰라",  
            insert_timestamp : "2022.11.06"
        }, 
        {
            no: 4,
            title : "zustand 적용", 
            type : "속보", 
            content :"솰라솰라솰라",  
            insert_timestamp : "2022.11.06"
        }, 
    ]
export default function ExampleA({ children }) {   
    return (
        <div> 
          {NEWS_LIST.map((news)=> 
              <div key={news.no}>{news.title}</div>
            )}
        </div>
    )
}

