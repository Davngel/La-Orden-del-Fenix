import './home.css';
import img from '../props/logofenix.PNG';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <h1>
        DESCRIPCIÓN
      </h1><br/>
        <div className='nosotros-text'>
          <p>
              Somos un grupo de personas compartiendo el interés por la lectura. Nos reunimos virtualmente en el “Cuartel
              General” (sala de Zoom) los domingos en un horario de 18:00 a 20:00 horas (hora México). Cada domingo
              hablamos de un tema diferente relacionado con libros y, a veces, se realizan actividades dentro de la
              sesión. Contamos con un grupo de Whatsapp y de Facebook para mantener comunidad entre los miembros y dar
              avisos sobre actividades especiales.<br/></p>
          <p>
              El club lo conforman todos los miembros que se unen. El staff a cargo se encarga de tomar en cuenta las
              sugerencias y opiniones de los miembros, dirigen las sesiones o dan los avisos correspondientes.</p>
              <h1>
        Historia 
      </h1>
          <br/>
          <p>
              El 5 de mayo del 2019 “El Club de Lectura: La Orden del Fénix” se consolidó como tal, reuniéndose por
              primera vez bajo este nombre en Plaza Mocambo Select en Veracruz. Debido a complicaciones personales y
              pandémicas el club estuvo inactivo desde febrero del año 2020 hasta el 28 de junio cuando el Cuartel General
              optó por la modalidad virtual.</p><br/>

          <h4>Objetivo General</h4><br/>
              <ul>
                  <li>Ofrecer un espacio de confianza donde la persona pueda hablar, debatir y relatar experiencias que le
                      han dejado los libros, sin temor alguno. </li>
              </ul><br/>

              <h4>Objetivos específicos</h4><br/>
                  <ol>
                      <li>Contar con plataformas donde se pueda conversar.</li>
                      <li>Crear un ambiente de confianza y comodidad para todos.</li>
                      <li>Hacer que todos los miembros se sientan parte de una comunidad.</li>
                  </ol>
                  <br/><br/>

                  <h4>Misión:</h4>
                  <li>Ser un club donde todos tengan su espacio, voz, compartan experiencias, participen y escuchen a otros.</li><br/>

                  <h4>Visión:</h4>
                  <li>Promover la lectura.</li><br/>

                  <h4>Valores:</h4><br/>
                  <ul>
                      <li>Solidaridad</li>
                      <li>Empatía</li>
                      <li>Respeto</li>
                      <li>Honestidad</li>
                  </ul>
        </div>
      

    </div>
  );
}

export default Home;
