import React from "react";
import "./form.css";

export default function MapingForm(props) {
  const { label, onChange, id, error, ...inputsProps } = props;
  return (
    <>
      <div className="form-items">
        <label htmlFor="">{label}</label>
        <input {...inputsProps} onChange={onChange} />
        {error && <span className="error-message">{error}</span>}
      </div>
    </>
  );
}
