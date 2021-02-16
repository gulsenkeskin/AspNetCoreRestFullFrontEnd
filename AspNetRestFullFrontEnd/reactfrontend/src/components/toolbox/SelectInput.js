import React from "react";

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value="">
          {defaultOption}
          {/* //default seçmi geçmek */}
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
      {/* //eğer bir hata varsa o hatayı buraya geçiyorum */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectInput;
