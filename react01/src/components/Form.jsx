import "./form.css";
import Input from "./Input.jsx";

function Formulario() {
  return (
    <>
      <form>
        <Input
          title={"Nombre Mascota"}
          className={"mascota u-full-width"}
        />
        <Input
          title={"Nombre Dueño"}
          className={"u-full-width"}
        />
        <label>Fecha</label>
        <input type="date" className="u-full-width" />
        <label>hora</label>
        <input type="time" className="u-full-width" />
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
}

export default Formulario;
