import React, { useEffect } from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Board from "./Contents/Board/Board";
import PlayGround from "./Contents/PlayGround/PlayGround";
import StartNoSmoking from "./Contents/StartNoSmoking/StartNoSmoking";
import MainContainer from "./MainContainer";
import { InitTestData } from "./TestData";

function App() {

  useEffect(() => { 
    if(sessionStorage.getItem('user') === null) { 
        sessionStorage.setItem('user', JSON.stringify(InitTestData));
    }
}, [])
  return (
    <BrowserRouter>
        <MainContainer >
            <Routes>
            <Route path="/" >
                <Route path ="" element={<StartNoSmoking />} />
                <Route path ="board"  element={<Board />}  />
                <Route path ="playground"  element={<PlayGround />}  />
                {/* <Route path ="profile/:userId"  element={<div>ㄲㄱ</div>} 
                loader={({ params }) => {
                    console.log(params.userId); // "hotspur"
                }} /> */}
            </Route>
            <Route path ="/profile"  element={<div>B</div>}  />
            
            </Routes>
        </MainContainer>
      
    </BrowserRouter>
  );
}

export default App; 

