import React from "react";
import { useDispatch } from "react-redux";
import { Button, Col } from "react-bootstrap";
import style from "../../css/sections/AboutUS.module.css";
import { addToOrder } from "../../redux/coffeeSlice";

const MenuItem = ({ img, price, name, description }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Col sm={3} className="mb-5">
        <div className={style.menu_item_img}>
          <img src={img} alt="menu item img" />
          <span className={style.menu_item_price}>{price}</span>
        </div>
      </Col>
      <Col sm={9} className="mb-5">
        <div className={style.item_description}>
          <h4 class>{name}</h4>
          <p class="m-0">{description}</p>
          <div className={style.order_btn}>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(addToOrder({ name, price }));
              }}
            >
              Order Now
            </Button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default MenuItem;
