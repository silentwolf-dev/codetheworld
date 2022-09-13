import {navlinks} from "../content/navlinks"
import { Link } from "react-router-dom";
import "../css/moblie.css"
import {Turn as Hamburger} from "hamburger-react";
import { useState } from "react";

export const Navbar = ()=>{
    const [isOpen, setOpen] = useState(false)


    return (
        <div className="navbar">
           
           <div className="nav-menu">

            <h1 className="nav-logo">IZB</h1>

             <div className="ham-menu">
                <Hamburger color="#1d4ed8" toggled={isOpen} toggle={setOpen}/>
             </div>
            
            </div>
               <ul className={`nav-links ${ isOpen ? "flex": "hidden"}`}>
                   {
                    navlinks.map((value)=>{
                       return (
                          <li
                           className="links"
                          >
                            <Link className="link" to={value.route}>{value.name}</Link>
                          </li>
                       );
                    })
                   }
               </ul>
        </div>
    )
}