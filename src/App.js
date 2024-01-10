import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import './App.css'
import Experience from "./component/Experience/Experience";
import Project from "./component/Project/Project";

function App() {
  return (
    <>
      <div className="App" >
        <Navbar/>
        <Home/>
        <Experience/>
        <Project/>
      </div>
      <div className="MobileView">Please Open it in Desktop</div>
    </>
  );
}

export default App;
