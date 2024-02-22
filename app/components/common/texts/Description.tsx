"use client";

interface TitleProps {
  text: string;
  italic?: boolean;
  center?: boolean;
  right?: boolean;
  fontFamily?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?:
    | "font-light"
    | "font-regular"
    | "font-medium"
    | "font-semibold"
    | "font-extrabold";
}

const Description: React.FC<TitleProps> = ({
  text,
  italic,
  center,
  right,
  fontFamily = "font-Quicksand",
  fontSize = "text-sm sm:text-md md:text-lg lg:text-xl",
  fontColor = "text-[#6D2E46]",
  fontWeight = "font-regular",
}) => {
  return (
    <span
      className={`
            flex items-center 
            ${fontFamily} 
            ${fontColor} 
            ${fontSize} 
            ${fontWeight} 
            ${italic ? "italic" : ""} 
            ${center ? "justify-center" : ""} 
            ${right ? "justify-end" : ""}`}
    >
      {text}
    </span>
  );
};

export default Description;
