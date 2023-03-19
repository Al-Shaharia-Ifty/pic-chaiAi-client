import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-white">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs text-green-600 border border-green-600 hover:bg-green-600 hover:text-white duration-300 py-1 px-2 rounded-[5px]"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-[#2C2C2C] border focus:border-green-600 text-gray-300 text-xk rounded-lg outline-none block w-full p-3 duration-300"
      />
    </div>
  );
};

export default FormField;
