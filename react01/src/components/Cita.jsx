import React from "react"
import "./Cita.css"

const Cita = (props) => {
    return (          
        <div class="cita">
            <p>Mascota: <span>{props.mascota}</span></p>
            <p>Dueño: <span>{props.dueno}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Sintomas: <span>{props.sinotmas}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
        </div>
    )
}

export default Cita

