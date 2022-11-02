import dayjs from "dayjs";
import React from "react";  
import "./StartNoSmoking.css"



const DATA_LIST = [
    {title : "금연 시작 일", data : dayjs().format("YYYY년 MM월 DD일")},
    {title : "금연 기간", data : "0일"},
    {title : "피우지 않은 담배", data : "10,000 개비"},
]

export default function StartNoSmoking({ children }) { 
    return (
        <div className="container text-center">
            <div className="row row-cols-2">
                {DATA_LIST.map((data, idx) => {
                    return <div key={idx} >
                            <div className="col col-md-4 title">{data.title}</div>
                                <div className="col col-md-8 content">{data.data}</div>
                                <hr/>
                            </div>
                })} 
            </div>
            </div>
    )
}