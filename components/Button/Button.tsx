import React from "react";
import "./style/index.css";
interface IButton {
  parentClass?: string;
  className?: string;
  varient?:
    | "secondaryDark"
    | "primary"
    | "white"
    | "secondaryDarkOutLine"
    | "whiteBordered"
    | "primaryBlackOutLine"
    | undefined;
  smallBtn?: boolean;
  children: JSX.Element | string;
  type?: "button" | "submit" | "reset" | undefined;
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = (props: IButton) => {
  return (
    <>
      <div className={`${props.parentClass ? props.parentClass : ""}`}>
        <button
          className={`
         
      ${
        props.varient === "secondaryDark"
          ? "bg-secondary text-black focus:ring-secondary"
          : props.varient === "primary"
          ? "bg-primary text-white focus:ring-white"
          : props.varient === "secondaryDarkOutLine"
          ? "text-secondary border-2 border-secondary hover:bg-secondary hover:text-black"
          : props.varient === "primaryBlackOutLine"
          ? "text-primaryBlack border-2 border-primaryBlack hover:bg-primaryBlack hover:text-white"
          : props.varient === "whiteBordered"
          ? "bg-white hover:bg-gray-200 border border-solid border-gray-200 rounded-lg transition-all duration-500 active:scale-[0.97] focus:ring-2 focus:ring-offset-2 focus:ring-gray-300/50 select-none;"
          : props.varient === "white"
          ? "bg-white text-themeColor focus:ring-themeColor"
          : "bg-themeColor text-white focus:ring-themeColor"
      }
      ${props.smallBtn ? "h-8 text-14px" : " "}
      ${props.className ?? ""} 
      `}
          type={props.type}
          onClick={props.onClickHandler}
          disabled={props.disabled}
        >
          <>{props.children}</>
        </button>
      </div>
    </>
  );
};

export default Button;
