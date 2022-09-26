import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import {Route, Routes} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Course } from "./components/pages/Courses"
import { SignupPage } from "./components/pages/signup";
import { LoginPage } from "./components/pages/login";
function App() {
  return (
    <div className="App">
        <Navbar/>
           <Routes>
             <Route exact path="/" element={<Home />}/>
             <Route exact path="/courses" element={<Course/>}/>
             <Route exact path="/auth/signup" element={<SignupPage/>}/>
             <Route exact path="/auth/login" element={<LoginPage/>}/>
           </Routes>
        <Footer/>
    </div>
  );
}


export default App

