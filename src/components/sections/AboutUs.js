import React from "react";
import style from "../../css/sections/AboutUS.module.css";
import SectionTitle from "../SectionTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutUsImg from "../../img/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AboutUS = () => {
  const vision = [
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
    <div className={`container ${style.about_us}`}>
      <div className={style.title}>
        <SectionTitle name="About us" title="Serving Since 1950" />
      </div>
      <div className={style.about_us_container}>
        <Row>
          <Col lg={4} md={12} sm={12}>
            <div className={style.about_us_content}>
              <h1 className="mb-3">Our Story</h1>
              <h5 className="mb-3">
                Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet
                sed vero dolor sea
              </h5>
              <p>
                Takimata sed vero vero no sit sed, justo clita duo no duo amet
                et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet
                amet no. Est nonumy sed labore eirmod sit magna. Erat at est
                justo sit ut. Labor diam sed ipsum et eirmod
              </p>
              <a
                href=""
                className={`btn btn-secondary font-weight-bold py-2 px-4 mt-2 ${style.story_btn}`}
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className={style.section_img}>
              <img src={aboutUsImg} alt="about us img" />
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className={style.about_us_content}>
              <h1 className="mb-3">Our Vision</h1>
              <p>
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              {vision.map((header) => (
                <h5>
                  <FontAwesomeIcon icon={header.icon} className={style.icon} />
                  {header.title}
                </h5>
              ))}
              <a
                href="#"
                className={`btn btn-secondary font-weight-bold py-2 px-4 mt-2 ${style.vision_btn}`}
              >
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUS;
