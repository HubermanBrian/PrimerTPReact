import React from "react";
import "./Input.css";

const Input = ({ title, className, value, onChange }) => {
  return (
    <>
      <label htmlFor="">{title}</label>
      <input
        type="text"
        placeholder={title}
        className={className}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
