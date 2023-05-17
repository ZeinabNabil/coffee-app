import React from "react";

// Style
import style from "../../css/sections/Sections.module.css";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Images
import testiImgOne from "../../img/testimonial-1.jpg";
import testiImgTwo from "../../img/testimonial-2.jpg";
import testiImgThree from "../../img/testimonial-3.jpg";
import testiImgFour from "../../img/testimonial-4.jpg";

// React bootstrap
import { Col, Row } from "react-bootstrap";

// Components
import SectionTitle from "./SectionTitle";

const Reviews = () => {
  const clients = [
    {
      clientImg: testiImgOne,
      clientName: "Client Name",
      clientProf: "Profession",
      clientReview:
        "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
    },
    {
      clientImg: testiImgTwo,
      clientName: "Client Name",
      clientProf: "Profession",
      clientReview:
        "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
    },
    {
      clientImg: testiImgThree,
      clientName: "Client Name",
      clientProf: "Profession",
      clientReview:
        "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
    },
    {
      clientImg: testiImgFour,
      clientName: "Client Name",
      clientProf: "Profession",
      clientReview:
        "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
    },
  ];
  return (
    <div className={`container ${style.menu}`}>
      <div className={style.title}>
        <SectionTitle name="Testimonial" title="Our Clients Say" />
      </div>
      <div className={style.menu_container}>
        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <Row>
                  <Col lg={12}>
                    <Row>
                      <Col lg={3} md={6} sm={12} className="mb-3">
                        <div className={style.review_img}>
                          <img src={client.clientImg} alt="review img" />
                        </div>
                      </Col>
                      <Col lg={9} md={6} sm={12} className="mb-3">
                        <div className={`ml-3 ${style.review_content}`}>
                          <h4>{client.clientName}</h4>
                          <i>{client.clientProf}</i>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={12} className="mb-5">
                    <div className={style.review_description}>
                      <p className="m-0">{client.clientReview}</p>
                    </div>
                  </Col>
                </Row>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
