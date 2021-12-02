import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  fontFamily:string;
  fontSize:string;
  fontWeight:any;
  textAlign:any;
}

const Button: React.FC<Props> = ({
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    fontFamily,
    fontSize,
    fontWeight,
    textAlign,

  }) => { 
  return (
    <button 
      onClick={onClick}
       
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
         fontFamily,
         fontSize,
         fontWeight,
         textAlign,
      }}
    >
    {children}
    </button>
  );
}

export default Button;