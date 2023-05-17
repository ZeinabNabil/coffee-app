import React from "react";

// Style
import style from "../../css/sections/Sections.module.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// React bootstrap
import { Col, Row } from "react-bootstrap";

// Components
import CoffeeForm from "./CoffeeForm";

const Reservation = () => {
  const reservation = [
    {
      icon: faCheck,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      icon: faCheck,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      icon: faCheck,
      title: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div
      className={`container ${style.coffee_background} ${style.reservation}`}
    >
      <Row style={{ height: "100%" }}>
        <Col lg={6} md={6} sm={12}>
          <div className={`${style.reservation_content}`}>
            <div className="mb-4">
              <h1 className="display-3 text-primary">30% OFF</h1>
              <h1 className="text-white">For Online Reservation</h1>
            </div>
            <p className="text-white">
              Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut
              sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed
              diam. Ea et erat ut sed diam sea
            </p>
            {reservation.map((header, index) => (
              <h5 key={index}>
                <FontAwesomeIcon icon={header.icon} className={style.icon} />
                {header.title}
              </h5>
            ))}
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} style={{ padding: "0" }}>
          <div className={`${style.reservation_form}`}>
            <div className={style.reservation_form_header}>
              <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
            </div>
            <CoffeeForm
              types={[
                { typeName: "text", placeholder: "Name" },
                { typeName: "email", placeholder: "Email" },
                { typeName: "date", placeholder: "Date" },
                { typeName: "time", placeholder: "Time" },
              ]}
              selection={true}
              btnName="Book Now"
              options={[
                "Person",
                "Person 1",
                "Person 2",
                "Person 3",
                "Person 4",
              ]}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Reservation;
