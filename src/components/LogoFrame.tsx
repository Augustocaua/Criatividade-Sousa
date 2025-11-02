import React from 'react';
import logo from "@/assets/criatividade-sousa-logo-novo.svg";

interface LogoFrameProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoFrame: React.FC<LogoFrameProps> = ({ 
  className = '', 
  width = 300, 
  height = 200 
}) => {
  return (
    <img 
      className={className}
      src={logo}
      alt="Criatividade Sousa Logo"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        objectFit: 'contain'
      }}
    />
  );
};

export default LogoFrame;