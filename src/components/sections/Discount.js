import React from "react";

// Style
import style from "../../css/sections/Sections.module.css";

// React bootstrap
import { Button, Form } from "react-bootstrap";

// Images
import discountBg from "../../img/bg.jpg";

// Components
import CoffeeForm from "./CoffeeForm";

const Discount = () => {
  return (
    <div className={`${style.coffee_background} ${style.discount}`}>
      <div className={`container ${style.discount_content}`}>
        <h1 className="display-3 text-primary mt-3">50% off</h1>
        <h1 className="text-white mb-3">Sunday Special Offer</h1>
        <h4 className="text-white font-weight-normal mb-4 pb-3">
          Only for Sunday from 1st Jan to 30th Jan 2045
        </h4>
        <div className={style.discount_form}>
          <CoffeeForm
            types={[{ typeName: "email", placeholder: "Your Email" }]}
            selection={false}
            btnName="Sign Up"
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
