import React, { useEffect } from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Board from "./Contents/Board/Board";
import PlayGround from "./Contents/PlayGround/PlayGround"; 
import IWillGoToCoffee from "./Contents/PlayGround/Toy/IWillGoToCoffee"; 
import StartNoSmoking from "./Contents/StartNoSmoking/StartNoSmoking";
import Todo from "./Contents/Todo/Todo";
import MainContainer from "./MainContainer";
import { InitTestData } from "./TestData";
 
import { HelmetProvider } from 'react-helmet-async';

import SEOMetaTag from './SEOMetaTag' 
function App() {

  useEffect(() => { 
    if(sessionStorage.getItem('user') === null) { 
        sessionStorage.setItem('user', JSON.stringify(InitTestData));
    }
}, [])
  return (
    <BrowserRouter> 

  <HelmetProvider>
        <MainContainer >
          <SEOMetaTag title={"PlayGround"}/>
            <Routes>
            <Route path="/" >  
                <Route path ="" element={<StartNoSmoking />} />
                <Route path ="board"  element={<Board />}  />
                <Route path ="playground"  element={<PlayGround />}  />
                <Route path ="todo"  element={<Todo />}  /> 
                <Route path = "coffee" element={<IWillGoToCoffee />} /> 
                {/* <Route path ="profile/:userId"  element={<div>ㄲㄱ</div>} 
                loader={({ params }) => {
                    console.log(params.userId); // "hotspur"
                }} /> */}
            </Route>
            <Route path ="/profile"  element={<div>B</div>}  />
            
            </Routes>
        </MainContainer> 
        </HelmetProvider> 
    </BrowserRouter>
  );
}

export default App; 

