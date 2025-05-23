import React, { useState } from "react";
import "./form.css";
import Input from "./Input.jsx";

function Formulario({ agregarCita }) {
  const [mascota, setMascota] = useState("");
  const [dueno, setDueno] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaCita = {
      mascota,
      dueno,
      fecha,
      hora,
      sintomas
    };

    agregarCita(nuevaCita);

    setMascota("");
    setDueno("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          title={"Nombre Mascota"}
          className={"mascota u-full-width"}
          value={mascota}
          onChange={e => setMascota(e.target.value)}
        />
        <Input
          title={"Nombre Dueño"}
          className={"u-full-width"}
          value={dueno}
          onChange={e => setDueno(e.target.value)}
        />
        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          value={fecha}
          onChange={e => setFecha(e.target.value)}
        />
        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          value={hora}
          onChange={e => setHora(e.target.value)}
        />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={sintomas}
          onChange={e => setSintomas(e.target.value)}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
}

export default Formulario;
