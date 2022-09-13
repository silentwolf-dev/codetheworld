import { AboutMeCard } from "../Aboutme"
import "../../css/aboutme.css"
import "../../css/tut.css"
import { TutCard } from "../Tutcard"
import { TutCardsData } from "../../content/content"


export const Home = ()=>{
     return (
        <div className="home">
                  <div className="aboutme-section">
                         <h2 className="aboutme-title">About me</h2>
                         <AboutMeCard/>
                         <h2 className="tutorplan-title">Learn To Code</h2>

                         <div className="tutcard-container">
                         {
                           TutCardsData.map((values)=>{
                             return(
                               <TutCard 
                               id={values.id}
                               title={values.title}
                               btnText={values.btn}
                               description={values.descripton}
                               benifits={values.benifits}
                               />
                             )
                           })
                         }
                         </div>   
                  </div>           
         </div>
     )
}