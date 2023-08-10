import React from 'react'

export const FormInput = ({ id, label, value, onChange, error, ...restProps}) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        {...restProps}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};
export default FormInput;
