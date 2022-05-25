import "./contact.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>CONTÁCTANOS</h1>
      <div className="contact-links">
        <a
          href="https://www.facebook.com/cdllaordendelfenix"
          className="contact facebook"
          target={"blank"}
        >
          <AiOutlineFacebook className="icon" />
          <h2>
            facebook <span>cdllaordendelfenix</span>
          </h2>
        </a>

        <a
          href="https://twitter.com/CLOrdendelfenix"
          className="contact twitter"
          target={"blank"}
        >
          <AiOutlineTwitter className="icon" />
          <h2>
            twitter <span>CLOrdendelfenix</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/cdllaordendelfenix/" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>cdllaordendelfenix</span>
          </h2>
        </a>

        
      </div>
    </div>
  );
}

export default Contact;
