import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import {Route, Routes} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Course } from "./components/pages/Courses"
function App() {
  return (
    <div className="App">
        <Navbar/>
           <Routes>
             <Route exact path="/" element={<Home />}/>
             <Route exact path="/courses" element={<Course/>}/>
           </Routes>
        <Footer/>
    </div>
  );
}


export default App

