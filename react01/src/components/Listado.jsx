import React from "react";

const Listado = ({ children }) => {
  return (
    <div>
      <h1>Listado</h1>
      <div>{children}</div>
    </div>
  );
};

export default Listado;