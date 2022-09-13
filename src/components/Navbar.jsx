import "../css/navbar.css"
import {navlinks} from "../content/navlinks"
import { Link } from "react-router-dom";

import {Turn as Hamburger} from "hamburger-react";
import { useState } from "react";

export const Navbar = ()=>{
    const [isOpen, setOpen] = useState(false)


    return (
        <div className="navbar">
           
           <h1 className="nav-logo mobile-hidden">IZB</h1>
         
           <div className="nav-menu mobile">

            <h1 className="nav-logo">IZB</h1>

             <div className="ham-menu">
                <Hamburger color="white" toggled={isOpen} toggle={setOpen}/>
             </div>


            </div>
               <ul className={`nav-links ${ isOpen ? "flex": "hidden"}`}>
                   {
                    navlinks.map((value)=>{
                       return (
                          <li
                           className="links"
                           onClick={(e) => {setOpen((p) => !p)}}
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