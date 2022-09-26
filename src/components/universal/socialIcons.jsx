import Instagram from "../../assets/instagram.png"
import Youtube  from "../../assets/youtube.png"
import Discord from "../../assets/discord.png"


export const IconDisplay = ()=> {
    return (
              <div className="icons">
                    <a className="footer-link-icon" href="https://instagram.com">
                        <img classname="fs-link" src={Instagram} alt="" width={40} height={40} />
                    </a>

                    <a className="footer-link-icon"  href="https://www.youtube.com/">
                        <img className="fs-icons" src={Discord} alt="" width={"40"} height={"40"} />
                    </a>

                    <a className="footer-link-icon" href="https://www.youtube.com/">
                        <img className="fs-icons" src={Youtube} alt="" width={"40"} height={"40"} />
                    </a>

                </div>
    );
}