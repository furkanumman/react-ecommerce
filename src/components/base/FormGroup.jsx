import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ children, meta, label }) => {
  const { touched, error } = meta;
  return (
    <div className="mb-3 flex flex-col">
      {label && (
        <label className="mb-2 text-sm font-medium text-slate-800">
          {label}
        </label>
      )}
      {children}
      {error && touched && <div className="text-sm text-red-700">{error}</div>}
    </div>
  );
};

FormGroup.propTypes = {};

export default FormGroup;
