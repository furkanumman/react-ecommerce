import React from "react";
import TextInput from "@/components/base/TextInput";
import FormGroup from "@/components/base/FormGroup";

const FormInput = ({ field, meta, label, type }) => {
  const { name, value, onChange, onBlur } = field;
  return (
    <FormGroup meta={meta} label={label}>
      <TextInput
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      />
    </FormGroup>
  );
};

export default FormInput;
