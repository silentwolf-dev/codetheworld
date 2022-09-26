
import { aboutmetext } from "../content/content";


export const AboutMeCard = () => {
    return (
        <div className="aboutme-card">
            <h2 className="aboutme-title">
                About me
            </h2>
            
            <div className="aboutme-content">
                <p className="aboutme-text">{aboutmetext}</p>
            </div>
        </div>
    );
};