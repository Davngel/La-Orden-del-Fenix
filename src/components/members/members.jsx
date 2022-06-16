import "./members.css";
import clowplace from "../props/clowplace.jpg"
import lectomaniatica from "../props/lectomaniatica.jpg"
import yulma from "../props/yulma.png"
import desencantado from "../props/Desencantado.png"
import fngirl from "../props/Fan_Grl.jpg"
import grace from "../props/Grace_Queen.jpg"
import micari from "../props/micari.png"
import umbra from "../props/Umbra.jpg"
import teteralalala from "../props/teteralalala.PNG"

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Recomendaciones</h1>

      <div className="member member-1">
        <a href="https://teteralalala.com/"><img class ="member-img" src={teteralalala} alt="teteralalala" loading="lazy"/></a>
        <div className="member-info">
          <h1 className="name">Teteralalala</h1>
          <h3 className="position">Booktuber</h3>
          <h4 className="about">
          Mi nombre es Tere, pero en internet me conocen como "Tetera".
          </h4>
        </div>
      </div>

      <div className="member member-2">
        <a href="https://www.youtube.com/channel/UCZAHfVGnT8qAS0TY2okFJJw"><img class ="member-img" src={clowplace} alt="clowplace" loading="lazy"/></a>
        <div className="member-info">
          <h1 className="name">Clowplace</h1>
          <h3 className="position">Mangas y libros de romántica</h3>
          <h4 className="about">
          Soy un excéntrico hombre gay sisgénero. que lo único extraordinario ha sido tratar de salir adelante y ser feliz como todo mundo. Amante de los libros de novela romántica y el manga. Capaz de dar el corazón y brindar mi amistad a quien desee que sea su amigo.
          </h4>
        </div>
      </div>

      <div className="member member-3">
        <a href="https://linktr.ee/sol_lectomaniatica"><img class ="member-img" src={lectomaniatica} alt="lectomaniatica" loading="lazy"/></a>
        <div className="member-info">
          <h1 className="name">Lectomaniática</h1>
          <h3 className="position">Literario</h3>
          <h4 className="about">
          Lectora, seudopoeta, ELF, IUaena. A los sentimientos me remito. Quiero demasiado, me encierro en mi demasiado, pienso demasiado.
          </h4>
        </div>
      </div>

      <div className="member member-4">
        <a href="https://instagram.com/yufel_rosalie?igshid=YmMyMTA2M2Y="><img class ="member-img" src={yulma} alt="yulma" loading="lazy"/></a>
        <div className="member-info">
          <h1 className="name">Yulma Espinoza</h1>
          <h3 className="position">Lecturas, clubs y fangirleo de cosas que me gustan</h3>
          <h4 className="about">
          Soy una chica amable, confiable, se escuchar a las demás personas,me gusta platicar de cosas que me gustan y compartirlas.
          </h4>
        </div>
      </div>

      <div className="member member-5">
        <a href="https://linktr.ee/desencantado"><img class ="member-img" src={desencantado} alt="desencantado" loading="lazy"/></a>
        <div className="member-info">
          <h1 className="name">Desencantado</h1>
          <h3 className="position">Música/Libros/Divulgación científica</h3>
          <h4 className="about">
          Soy introvertido, pero cuando hago lo que me gusta me transformo. Amo hacer música, leer y encontrarle el lado científico a todo. Y compartir todo lo que me apasiona con la gente.
          </h4>
        </div>
      </div>

      <div className="member member-6">
        <a href="https://instagram.com/_fan_grl_?igshid=YmMyMTA2M2Y="><img class ="member-img" src={fngirl} alt="fngirl" loading="lazy"/></a>
        <div className="member-info">
          <h1 className="name">Ivette / FanGrl</h1>
          <h3 className="position">Contenido fangrleador sobre: Series/películas/WatchParties y Lecturas conjuntas</h3>
          <h4 className="about">
          Doy mi opinión para nada experta y fangirleadora de las cosas que amo y comparto con mis amigxs.
          </h4>
        </div>
      </div>

      <div className="member member-7">
        <a href="https://instagram.com/grace.dieciseis?igshid=YmMyMTA2M2Y="><img class ="member-img" src={grace} alt="grace" loading="lazy"/></a>
        <div className="member-info">
          <h1 className="name">Grace</h1>
          <h3 className="position">Blog personal y arte (digital y tradicional)</h3>
          <h4 className="about">
          Bióloga marina, que le gusta el arte, la comida, Percy Jackson y documento públicamente más sus downs que ups. Me gusta mucho ver contenido.
          </h4>
        </div>
      </div>

      <div className="member member-8">
        <a href="https://flow.page/micarirandom"><img class ="member-img" src={micari} alt="micari" loading="lazy"/></a>
        <div className="member-info">
          <h1 className="name">Mari (Micari)</h1>
          <h3 className="position">Escritora, random en su mayoria</h3>
          <h4 className="about">
          Disfruto de varios hobbies al mismo tiempo y de fangirlear en varias redes como sea posible.
          </h4>
        </div>
      </div>

      <div className="member member-9">
        <a href="https://linktr.ee/Umbra__YT"><img class ="member-img" src={umbra} alt="clowplace" loading="lazy"/></a>
        <div className="member-info">
          <h1 className="name">Jaz / Umbra</h1>
          <h3 className="position">Escritura, Videojuegos, covers, doblaje, reseñas, lectura, oc cosplay, random</h3>
          <h4 className="about">
          Me gusta el anime, la música variada menos ranchera, color favorito azul rey y negro, me gusta el rolplay escrito. Pelis favoritas: el rey león, el libro de la selva, fragmentado y el laberinto del fauno. Amo el cosplay, me gusta leer lectura infantil y juvenil, fantasía y un poco de misterio y sobrenatural. Banda favorita actual: Celtian y mago de oz :3
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Members;
