import { useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// React bootstrap
import { Button } from "react-bootstrap";

// Components
import CoffeeHeader from "./sections/CoffeeHeader";
import AboutUS from "./sections/AboutUs";
import Services from "./sections/Services";
import Discount from "./sections/Discount";
import Menu from "./sections/Menu";
import Reservation from "./sections/Reservation";
import Reviews from "./sections/Reviews";
import CoffeeFooter from "./sections/CoffeeFooter";
import OrderCart from "./sections/OrderCart";

const Landing = () => {
  const { scrolled, orderCount } = useSelector((state) => state.coffee);
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {scrolled ? (
        <div className="order-cart">
          <Button onClick={() => setModalShow(true)}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="order-count">{orderCount}</span>
          </Button>
          <OrderCart show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      ) : null}
      <div className="header">
        <CoffeeHeader />
      </div>
      <div id="About" className="sections section-one">
        <AboutUS />
      </div>
      <div id="Service" className="sections section-two">
        <Services />
      </div>
      <div className="sections section-three">
        <Discount />
      </div>
      <div id="Menu" className="sections section-four">
        <Menu />
      </div>
      <div id="Reservation" className="sections section-five">
        <Reservation />
      </div>
      <div id="Testimonial" className="sections section-six">
        <Reviews />
      </div>
      <div id="Contact" className="sections section-six">
        <CoffeeFooter />
      </div>
    </div>
  );
};

export default Landing;
