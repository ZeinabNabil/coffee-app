import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "../../css/sections/AboutUS.module.css";
import SectionTitle from "../SectionTitle";
import serviceOne from "../../img/service-1.jpg";
import serviceTwo from "../../img/service-2.jpg";
import serviceThree from "../../img/service-3.jpg";
import serviceFour from "../../img/service-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faMugSaucer,
  faMedal,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      img: serviceOne,
      icon: faTruck,
      header: "Fastest Door Delivery",
      content:
        "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    },
    {
      img: serviceTwo,
      icon: faMugSaucer,
      header: "Fresh Coffee Beans",
      content:
        "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    },
    {
      img: serviceThree,
      icon: faMedal,
      header: "Best Quality Coffee",
      content:
        "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    },
    {
      img: serviceFour,
      icon: faTable,
      header: "Online Table Booking",
      content:
        "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    },
  ];
  return (
    <div className={`container ${style.services}`}>
      <div className={style.title}>
        <SectionTitle name="Our Services" title="Fresh & Organic Beans" />
      </div>
      <div className={style.services_container}>
        <Row>
          {services.map((service) => {
            return (
              <Col lg={6} md={12} className={style.service}>
                <Row>
                  <Col lg={6} md={6} sm={12}>
                    <div className={style.service_img}>
                      <img
                        className="img-fluid mb-3 mb-sm-0"
                        src={service.img}
                        alt="service one"
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div className={style.service_content}>
                      <h4>
                        <span className={style.service_icon}>
                          <FontAwesomeIcon icon={service.icon} />
                        </span>
                        {service.header}
                      </h4>
                      <p>{service.content}</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Services;
