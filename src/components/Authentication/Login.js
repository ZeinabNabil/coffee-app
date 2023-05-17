import React, { useState } from "react";

// Style
import style from "../../css/authentication/Auth.module.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// React Router
import { Link } from "react-router-dom";

// Components
import CoffeeForm from "../sections/CoffeeForm";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //   const onInputChange = (event) => {
  //     const value = event.target.value;
  //     setForm({ ...form, [event.target.name]: value });
  //   };

  const onInputChange = (evt) => {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  };

  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    const loginUser = {
      email: form.email,
      password: form.password,
    };
  };
  return (
    <div className={style.auth_content}>
      <div className={`${style.auth_links} ${style.back_home}`}>
        <Link to="/">
          <FontAwesomeIcon icon={faCircleXmark} />
        </Link>
      </div>
      <CoffeeForm
        onSubmit={onFormSubmit}
        types={[
          {
            labelName: "Email",
            typeName: "email",
            placeholder: "Enter your email",
            typeId: "Email",
            nameOfType: "email",
            onChange: onInputChange,
            typeValue: form.email,
          },
          {
            labelName: "Password",
            typeName: "password",
            placeholder: "Enter your Password",
            typeId: "Password",
            nameOfType: "password",
            onChange: onInputChange,
            typeValue: form.password,
          },
        ]}
        selection={false}
        btnName="Login"
      />
      <div className={style.auth_links}>
        Not have an account?{" "}
        <span>
          <Link to="/auth/Register">Register Now!</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
