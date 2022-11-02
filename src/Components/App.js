import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Contents from "./Contents/Contents";
import MainContainer from "./MainContainer";

function App() {
  return (
    <BrowserRouter>
        <MainContainer >
            <Routes>
            <Route path="/" >
                <Route path ="" element={<Contents />} />
                <Route path ="profile"  element={<div>ㄱ ㄱ ㄱ ㄱ </div>}  />
                <Route path ="profile/:userId"  element={<div>ㄲㄱ</div>} 
                loader={({ params }) => {
                    console.log(params.userId); // "hotspur"
                }} />
            </Route>
            <Route path ="/profile"  element={<div>B</div>}  />
            
            </Routes>
        </MainContainer>
      
    </BrowserRouter>
  );
}

export default App; 

