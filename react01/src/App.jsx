import React, { useState } from "react";
import "./App.css";
import Formulario from "./components/Form";
import Cita from "./components/Cita.jsx";
import Listado from "./components/Listado.jsx";


//PARA CONECTAR LOS DATOS DEL FORM CON LA CARD CITA SE CONECTA MEDIANTE APP.JSX
function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: "Nina",
      dueno: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      id: 2,
      mascota: "Sifon",
      dueno: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      id: 3,
      mascota: "Floki",
      dueno: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ]);


  //se agrega cita al array
  const agregarCita = (nuevaCita) => {
    nuevaCita.id = Date.now();
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
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
              {citas.map(cita => (
                <Cita
                  key={cita.id}
                  {...cita}
                  eliminarCita={eliminarCita}
                />
              ))}
            </Listado>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;