import { useState } from "react";

interface TextFieldProps {
  id: string;
  label: string;
  type?: string;
  width?: string;
  height?: string;
  radius?: string;
  fontSizeLabel?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  bgColor?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  width = "w-[100%]",
  height = "h-12",
  radius = "rounded-lg",
  required,
  bgColor = "bg-white",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const inputStyle = {
    boxShadow: isFocused ? `0 0 0 2px #4D194D` : "none",
    border: isFocused ? "none" : "1.8px solid #4D194D",
  };

  return (
    <div className="relative font-playfair-display font-normal">
      <input
        id={id}
        disabled={disabled}
        placeholder=" "
        type={type}
        style={inputStyle}
        className={`
          peer
          p-4
          pt-6
          ${bgColor}
          border-[2px]
          transition
          disabled:opacity-40
          disabled:cursor-not-allowed
          focus:outline-none
          focus:shadow-outline
          border-[#4D194D]
          ${width} ${height} ${radius}
        `}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
        required={required}
      />
      <label
        className={`
          absolute
          text-md
          duration-150
          transform
          -translate-y-3
          top-2
          z-10
          origin-[0]
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-85
          peer-focus:-translate-y-5
          peer-focus:bg-white
          peer-focus:px-2
          peer-disabled:opacity-40
          font-quicksand
          font-normal
          ${formatPrice ? "left-9" : "left-4"}
          ${
            isFocused || inputValue || (required && !disabled)
              ? "scale-85 -translate-y-5 bg-white px-2"
              : ""
          }
        `}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default TextField;
