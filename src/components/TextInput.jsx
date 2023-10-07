import React from "react";

const TextInput = ({
  type,
  name,
  placeholder,
  reference,
  label,
  maxLength,
  max,
  defaultValue,
  minLength,
  onChange,
  readOnly,
  min,
  step,
  required,
  disableAutoComplete,
  disabled,
}) => {
  return (
    <div className="mb-[25px] w-full">
      {label && (
        <label className="text-[18px] font-[600] text-[#100A2C]">{label}</label>
      )}

      <input
        className={`border border-[#858292] rounded-[8px] w-full text-[16px] font-[500] h-[51px] mt-[10px] px-[17px] py-[14px]`}
        type={type ? type : "text"}
        name={name}
        max={max}
        min={min}
        placeholder={placeholder}
        ref={reference}
        maxLength={maxLength}
        minLength={minLength}
        defaultValue={defaultValue}
        onChange={onChange}
        readOnly={readOnly}
        step={step}
        required={required}
        autoComplete={disableAutoComplete ? "new-password" : ""}
        disabled={disabled}
      />
    </div>
  );
};

export default TextInput;
