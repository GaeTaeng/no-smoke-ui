import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Header from './Components/Header/Header';
import './index.css'; 
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header >
        <Routes>
          <Route path="/" >
            <Route path ="" element={<div>유진이 금연사이트</div>} />
            <Route path ="profile"  element={<div>ㄱ ㄱ ㄱ ㄱ </div>}  />
            <Route path ="profile/:userId"  element={<div>ㄲㄱ</div>} 
              loader={({ params }) => {
                console.log(params.userId); // "hotspur"
            }} />
          </Route>
          <Route path ="/profile"  element={<div>B</div>}  />
          
        </Routes>
      </Header>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
