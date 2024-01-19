import Home from "./component/Home/Home";
import './App.css'
import Experience from "./component/Experience/Experience";
import Project from "./component/Project/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <>
      <div className="App" >
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path='/Experience' element={<Experience/>}/>
                  <Route path='/Project' element={ <Project/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
      </div>
      <div className="MobileView">Please Open it in Desktop</div>
    </>
  );
}

export default App;
