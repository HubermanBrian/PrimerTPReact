import React from "react";
import "./Cita.css";

const Cita = ({ id, mascota, dueno, fecha, hora, sintomas, eliminarCita }) => {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueno}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(id)}
      >
        Eliminar ×
      </button>
    </div>
  );
};

export default Cita;
