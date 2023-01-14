import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import imgOne from "../img/carousel-1.jpg";
import imgTwo from "../img/carousel-2.jpg";
import { makeScroll } from "../redux/coffeeSlice";

const CoffeeHeader = () => {
  const { scrolled } = useSelector((state) => state.coffee);
  const dispatch = useDispatch();
  const divRef = useRef(null);
  const navRef = useRef(null);
  // const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState(0);
  const [pageScroll, setPageScroll] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => setPageScroll(Math.floor(window.pageYOffset)),
      true
    );
  });

  useEffect(() => {
    setHeight(divRef.current.clientHeight - navRef.current.clientHeight);
  });

  useEffect(() => {
    if (pageScroll >= height) {
      dispatch(makeScroll(true));
    } else {
      dispatch(makeScroll(false));
    }
  });

  const coffeeNav = [
    "Home",
    "About",
    "Service",
    "Menu",
    "Pages",
    "Contact",
    "Login",
    "Register",
  ];
  const coffeeNavDrop = ["Reservation", "Testimonial"];
  const carouselData = [
    {
      img: imgOne,
      headers: ["We Have Been Serving", "Coffee", "* SINCE 1950 *"],
    },
    {
      img: imgTwo,
      headers: ["We Have Been Serving", "Coffee", "* SINCE 1950 *"],
    },
  ];
  return (
    <div className="coffee-header" ref={divRef}>
      <Navbar expand="lg" ref={navRef}>
        <Container fluid className={scrolled ? "fixed-navbar" : ""}>
          <Navbar.Brand href="#">Coffee</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {coffeeNav.map((item) => {
                if (item === "Pages") {
                  return (
                    <NavDropdown title={item} id="navbarScrollingDropdown">
                      {coffeeNavDrop.map((drop) => (
                        <NavDropdown.Item>
                          <HashLink smooth to={`#${drop}`}>
                            {drop}
                          </HashLink>
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  );
                } else {
                  return (
                    <Nav.Link>
                      {item === "Login" || item === "Register" ? (
                        <Link to={`/auth/${item}`}>{item}</Link>
                      ) : (
                        <HashLink smooth to={`#${item}`}>
                          {item}
                        </HashLink>
                      )}
                    </Nav.Link>
                  );
                }
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        {carouselData.map((item) => {
          return (
            <Carousel.Item>
              {/* <div className={`carosel-img carosel-img-${item.num}`}></div> */}
              <img className="d-block w-100" src={item.img} alt="First slide" />
              <Carousel.Caption>
                {item.headers.map((header) => (
                  <h2>{header}</h2>
                ))}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CoffeeHeader;
