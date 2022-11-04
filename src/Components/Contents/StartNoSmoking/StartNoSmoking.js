import dayjs from "dayjs";
import React, { useEffect } from "react";  
import { InitTestData, testData } from "../../TestData";
import "./StartNoSmoking.css"
 

export default function StartNoSmoking() {  


    useEffect(() => { 
        if(sessionStorage.getItem('user') === null) { 
            sessionStorage.setItem('user', JSON.stringify(InitTestData));
        }
    }, [])
    let user = JSON.parse(sessionStorage.getItem('user'))
    if(user === null) {
        user = InitTestData
    }
    const li_data = [
        {title : "이름", data : user.name},
        {title : "금연 시작 일", data : dayjs(user.start_date).format("YYYY년 MM월 DD일")},
        {title : "금연 기간", data : dayjs().diff(dayjs(user.start_date), "d")+ "일"},
        {title : "피우지 않은 담배", data : `${dayjs().diff(dayjs(user.start_date), "d")*user.day_of_count} 개비`},
        {title : "절약한 돈", data : `${dayjs().diff(dayjs("2022/11/01"), "d")*4500} 원`},
    ]
    return (
        <div className="container text-center">
            <div className="row row-cols-2">
                {li_data.map((data, idx) => {
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