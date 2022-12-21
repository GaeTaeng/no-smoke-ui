import React from 'react';
import NewsItem from './NewsItem';

const NewsManagement = (NEWS_LIST) => {
    return (
        <>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">TITLE</th>
                <th scope="col">작성자</th>
                <th scope="col">작성일</th>
                </tr>
            </thead>
            <tbody>
              {/* {NEWS_LIST.map((news, idx)=>{
                return <NewsItem key={idx} idx={idx} news={news}/>
              })} */}
              {console.log("newsList: ", NEWS_LIST)}
            </tbody>
            </table>
        </>
    );
};

export default NewsManagement;