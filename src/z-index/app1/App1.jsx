//? 1 Como se colocan las etiqueta por defecto.

//* La clave del z-index es como se colocan las etiquetas en html.

//! Si ambos tienen el mismo z-index, entonces se va superponer encima la etiqueta de mas abajo.

// El z-index lo que hace es superponer una etiqueta por encima de otra.

//? El z-index solo se puede usar cuando se tiene aplicado cualquier position excepto static. (Positions de flujo impuesto)

//* Vallor por defecto de z-index es cero => z-index: 0

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
