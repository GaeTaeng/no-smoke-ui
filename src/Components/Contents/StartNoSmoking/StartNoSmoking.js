import dayjs from "dayjs";
import React from "react";  
import "./StartNoSmoking.css"

const testUserIDX = {
    "김경인" : 0,
    "경인" : 0,
    "인" : 0,
    "이소현" : 1,
    "소현" : 1,
    "현" : 1,
    "김보연" : 2,
    "보연" : 2,
    "연" : 2,
    "김태훈" : 3,
    "경인" : 3,
    "인" : 3,
}

const testData = [

]

const DATA_LIST = [
    {title : "금연 시작 일", data : dayjs("2022/11/01").format("YYYY년 MM월 DD일")},
    {title : "금연 기간", data : dayjs().diff(dayjs("2022/11/01"), "d")+ "일"},
    {title : "피우지 않은 담배", data : `${dayjs().diff(dayjs("2022/11/01"), "d")*20} 개비`},
    {title : "절약한 돈", data : `${dayjs().diff(dayjs("2022/11/01"), "d")*4500} 원`},
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