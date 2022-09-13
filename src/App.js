import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import {Route, Routes} from "react-router-dom";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
        <Navbar/>
           <Routes>
             <Route exact path="/" element={<Home />}/>
           </Routes>
        <Footer/>
    </div>
  );
}


export default App

