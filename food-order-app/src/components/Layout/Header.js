import React from "react";

// import mealsImage from "~assets/meals.jpg";
import mealsImage from "../../assets/meals.jpg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} />
      </div>
    </>
  );
};

export default Header;
