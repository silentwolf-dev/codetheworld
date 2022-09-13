import { AboutMeCard } from "../Aboutme"
import "../../css/aboutme.css"
import "../../css/tut.css"
import { TutCard } from "../Tutcard"
import { Link } from "react-router-dom"
import { TutCardsData } from "../../content/content"
import { Contact } from "../Contact"

export const Home = () => {
  return (
    <div className="home">
      <div className="aboutme-section">
        <div className="aboutme-card-container">
          <AboutMeCard />
        </div>
        <div className="tutcard-container">
          <h2 className="tut-intro-text  mobile-hidden">
            <Link to="/courses" className="tut-intro-link">
              learn to code
            </Link>
          </h2>
          {
            TutCardsData.map((values) => {
              return (
                <TutCard
                  id={values.id}
                  price={values.price}
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