import React from "react";
import "./Input.css";

const Input = ({ title, className }) => {
  return (
    <>
      <label htmlFor="">{title}</label>
      <input type="text" placeholder={title} className={className} />
    </>
  );
};

export default Input;
