import React from "react";

const Button = ({ onClickLoad }) => {
  return (
    <div className="Button" onClick={onClickLoad}>
      Дальше
    </div>
  );
};

export default Button;
