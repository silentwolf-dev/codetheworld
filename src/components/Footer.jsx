import insta from "../assets/image.ig.jpg"
import youtube from "../assets/image.yt.jpg"
import "../css/footer.css"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Imani's portfolio</h2>
                <p className="footer-text">This website was coded by me using reactjs see down below! </p>

                <div className="icons">
                    <a className="footer-ig" href="https://instagram.com">
                        <img classname="ig-img" src={insta} alt="" width={40} height={40} />
                    </a>

                    <a className="footer-yt" href="https://www.youtube.com/">
                        <img className="yt-img" src={youtube} alt="" width={"40"} height={"40"} />
                    </a>
                </div>
            </div>
        </div>
    );
}