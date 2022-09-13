import AboutMeLogo from "../assets/image.about.jpg"
import { aboutmetext } from "../content/content";


export const AboutMeCard = ()=> {
    return (
        <div className="aboutme-card">
              <img src={AboutMeLogo} alt=""  className="aboutme-card-image"/>

              <div className="aboutme-content">
                     <p className="aboutme-text">{aboutmetext}</p>
              </div>
        </div>
    );
};