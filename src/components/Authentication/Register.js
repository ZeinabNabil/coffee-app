import React, { useState } from "react";
import style from "../../css/Auth.module.css";
import CoffeeForm from "../sections/CoffeeForm";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

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
      name: form.name,
      email: form.email,
      password: form.password,
      phone: form.phone,
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
            labelName: "Name",
            typeName: "text",
            placeholder: "Enter your Name",
            typeId: "Name",
            nameOfType: "name",
            onChange: onInputChange,
            typeValue: form.name,
          },
          {
            labelName: "Email",
            typeName: "email",
            placeholder: "Enter your Email",
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
          {
            labelName: "Phone",
            typeName: "text",
            placeholder: "Enter your Phone",
            typeId: "Phone",
            nameOfType: "phone",
            onChange: onInputChange,
            typeValue: form.password,
          },
        ]}
        selection={false}
        btnName="Register"
      />
      <div className={style.auth_links}>
        Already have an account?{" "}
        <span>
          <Link to="/auth/Login">Login Now!</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
