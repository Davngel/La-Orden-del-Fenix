import "./footer.css";
import { GiBookshelf } from "react-icons/gi";


function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        "Leamos miles de historias y renazcamos en cada una de ellas."{" "}
        <a href="#home">
          <h2>
            <GiBookshelf /> - I N I C I O -
          </h2>
        </a>
      </h1>
    </div>
  );
}
export default Footer;
