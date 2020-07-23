import React from 'react';
import "./Button.css";

const Button = ({loadMore}) => {
  return (
    <div>
      <button className="Button" onClick={loadMore}>Load more</button>
    </div>
  );
};

export default Button;