import "./reuniones.css";

const Reuniones = () => {
  return (
    <div>
      <span className="meet-text">DINÁMICAS</span>
      <div className="reuniones-container">
        <div className="reunion">
          <div className="content llv"></div>
          <h1>Liberación de Libros</h1>
        </div>
        <div className="reunion">
          <div className="content ds"></div>
          <h1>Dinámicas Especiales</h1>
        </div>
        <div className="reunion">
          <div className="content rnl"></div>
          <h1>Reto de "No Lectura"</h1>
        </div>
        <div className="reunion">
          <div className="content lc"></div>
          <h1>Lecturas Conjuntas</h1>
        </div>
       </div>
    </div>
  );
};

export default Reuniones;
