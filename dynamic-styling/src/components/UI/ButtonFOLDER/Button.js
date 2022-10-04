import React from "react";

import styles from "./ButtonCSSFileName.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={styles.buttonClassName}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
