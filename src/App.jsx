import React, { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./components/Form";
import Cita from "./components/Cita.jsx";
import Listado from "./components/Listado.jsx";

//PARA CONECTAR LOS DATOS DEL FORM CON LA CARD CITA SE CONECTA MEDIANTE APP.JSX
function App() {
  const [citas, setCitas] = useState(
    JSON.parse(localStorage.getItem("citas") || "[]")
  );

  useEffect(
    () => localStorage.setItem("citas", JSON.stringify(citas)),
    [citas]
  );

  //se agrega cita al array
  const agregarCita = (nuevaCita) => {
    nuevaCita.id = Date.now();
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  //Muestra la cita
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario agregarCita={agregarCita} />
          </div>
          <div className="one-half column">
            <Listado>
              {citas.map((cita) => (
                <Cita key={cita.id} {...cita} eliminarCita={eliminarCita} />
              ))}
            </Listado>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
