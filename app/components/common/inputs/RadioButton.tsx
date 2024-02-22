"use-client";
import React from "react";

// Use this when calling the radio buttons:
// const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string | undefined }>({});
//   const handleOptionChange = (groupName: string, value: string) => {
//     setSelectedOptions({ ...selectedOptions, [groupName]: value });
//   };

interface RadioButtonProps {
  groupName: string;
  name: string;
  value: string;
  isSelected?: boolean;
  isRequired?: boolean;
  size?: "sm" | "md" | "lg";
  fontSize?: string;
  fontColor?: string;
  fontWeight?: "normal" | "light" | "bold" | "semibold" | "extrabold";
  onChange?: (groupName: string, value: string) => void;
}

type SelectedOptions = {
  [key: string]: string | undefined;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  groupName,
  name,
  value,
  isSelected,
  isRequired,
  size = "sm",
  fontSize,
  fontColor = "text-[#4D194D]",
  fontWeight = "normal",
  onChange,
}) => {
  const sizeClass =
    size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";

  const handleSelectionChange = () => {
    if (onChange) {
      onChange(groupName, value);
    }
  };

  return (
    <label className="flex items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        required={isRequired}
        onChange={handleSelectionChange}
        className={`
                form-radio 
                border-2 
                border-[#4D194D]
                checked:bg-[#4D194D]
                checked:border-[#4D194D]
                focus:outline-none 
                focus:ring-transparent
                rounded-full
                ${sizeClass}
                transition duration-300
                `}
      />
      <span className={`ml-2 ${fontColor} ${fontSize} font-${fontWeight}`}>
        {name}
      </span>
    </label>
  );
};

export default RadioButton;
