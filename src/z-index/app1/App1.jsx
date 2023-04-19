//? 1 Como se colocan las etiqueta por defecto.

// La clave del z-index es como se colocan las etiquetas en html.

// Si ambos tienen el mismo z-index, entonces se va superponer encima la etiqueta de mas abajo.

import "./App1.css";

const App1 = () => {
  return (
    <div className="contenedor-general">
      <div className="contenedor1">😀</div>
      <div className="contenedor2">😡</div>
    </div>
  );
};

export default App1;
