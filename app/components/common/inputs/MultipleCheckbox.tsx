'use client';

import React from "react";

// Use this for handleOnChange:
// // const handleCheckboxChange = (selected: string[]) => {
//     console.log("Selected options:", selected);
//   };

interface CustomCheckboxProps {
    value: string;
    checked: boolean;
    onChange?: (value: string) => void;
    children: React.ReactNode;
}

export default function CustomCheckbox({
    value,
    checked,
    onChange,
    children,
}: CustomCheckboxProps) {
    const handleCheckboxClick = () => {
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <label className="flex flex-row items-center gap-6 cursor-pointer">
            <input
                type="checkbox"
                className="hidden"
                value={value}
                checked={checked}
                onChange={handleCheckboxClick}
            />
            <div className={`
                ${checked ? 'bg-[#6D0D6D]' : 'bg-[#FFE8F7]'} 
                ${checked ? 'border-[#6D0D6D]' : 'border-[#FFE8F7]'} 
                ${checked ? 'text-white' : 'text-primary-purple'} 
                font-Quicksand
                font-normal
                text-sm sm:text-sm md:text-md lg:text-md
                rounded-xl 
                px-6 py-3
                shadow-md
                transition
                hover:shadow-[#FFE8F7]
            `}>
                {children}
            </div>
        </label>
    );
}

interface CheckboxGroupProps {
    options: string[];
    onChange?: (selected: string[]) => void;
}

export function CheckboxGroup({ options, onChange }: CheckboxGroupProps) {
    const [checkedItems, setCheckedItems] = React.useState<{ [key: string]: boolean }>(() => {
        const initialState: { [key: string]: boolean } = {};
        options.forEach(option => {
            initialState[option] = false;
        });
        return initialState;
    });

    const handleCheckboxToggle = (value: string) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [value]: !prevState[value],
        }));

        setCheckedItems(prevState => {
            if (onChange) {
                const selectedOptions = Object.keys(prevState).filter(option => prevState[option]);
                onChange(selectedOptions);
            }
            return prevState;
        });
    };

    return (
        <div className="flex flex-row gap-3">
            {options.map(option => (
                <CustomCheckbox
                    key={option}
                    value={option}
                    checked={checkedItems[option]}
                    onChange={handleCheckboxToggle}
                >
                    {option}
                </CustomCheckbox>
            ))}
        </div>
    );
}
