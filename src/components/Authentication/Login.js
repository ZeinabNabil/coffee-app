import React, { useState } from "react";
import style from "../../css/Auth.module.css";
import CoffeeForm from "../sections/CoffeeForm";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log(form);

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
