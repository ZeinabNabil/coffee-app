import React from "react";

// Style
import style from "../../css/sections/Sections.module.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// React bootstrap
import { Col, Placeholder, Row } from "react-bootstrap";

// Components
import CoffeeForm from "./CoffeeForm";

const CoffeeFooter = () => {
  const getInTouch = [
    {
      icon: faLocationDot,
      p: "123 Street, New York, USA",
    },
    {
      icon: faPhone,
      p: "+012 345 67890",
    },
    {
      icon: faEnvelope,
      p: "info@example.com",
    },
  ];
  const socialLinks = [faTwitter, faFacebookF, faLinkedinIn, faInstagram];
  return (
    <div className={style.coffee_background}>
      <div className={style.footer_content}>
        <Row style={{ marginRight: "0" }}>
          <Col lg={3} md={6} sm={12}>
            <div className={style.footer_section}>
              <h4 className="mb-4">Get In Touch</h4>
              {getInTouch.map((item, index) => (
                <p key={index}>
                  <FontAwesomeIcon icon={item.icon} className={style.icon} />
                  {item.p}
                </p>
              ))}
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className={style.footer_section}>
              <h4 className="mb-4">Follow Us</h4>
              <p>
                Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
              </p>
              <div className={style.footer_links}>
                {socialLinks.map((link, index) => (
                  <a key={index} className="btn btn-outline-light" href="#">
                    <FontAwesomeIcon icon={link} />
                  </a>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className={style.footer_section}>
              <h4 className="mb-4">Open Hours</h4>
              <div>
                <h6 className="text-white text-uppercase">Monday - Friday</h6>
                <p>8.00 AM - 8.00 PM</p>
                <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
                <p>2.00 PM - 8.00 PM</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className={style.footer_section}>
              <h4 className="mb-4">Newsletter</h4>
              <p>
                Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
              </p>
              <div className={style.footer_form}>
                <CoffeeForm
                  types={[{ typeName: "email", placeholder: "Your Email" }]}
                  selection={false}
                  btnName="Sign Up"
                />
              </div>
            </div>
          </Col>
          <Col lg={12} style={{ padding: "0" }}>
            <div
              className={`container-fluid text-center text-white mt-4 py-4 px-sm-3 px-md-5 ${style.end_footer}`}
            >
              <p className="mb-2 text-white">
                Copyright ©{" "}
                <a className="font-weight-bold" href="#">
                  Domain
                </a>
                . All Rights Reserved.
              </p>
              <p className="m-0 text-white">
                Designed by{" "}
                <a className="font-weight-bold" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CoffeeFooter;
