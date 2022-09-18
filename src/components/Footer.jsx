import { IconDisplay } from "./socialIcons";
import "../css/footer.css"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Imani's portfolio</h2>
                <p className="footer-text">This website was coded by me using reactjs see down below! </p>
                <IconDisplay/>
            </div>
        </div>
    );
}