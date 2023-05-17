import React from "react";

// Redux
import { useDispatch } from "react-redux";
import { addToOrder } from "../../redux/coffeeSlice";

// Style
import style from "../../css/sections/Sections.module.css";

// React bootstrap
import { Button, Col } from "react-bootstrap";

const MenuItem = ({
  id,
  img,
  price,
  name,
  description,
  count,
  itemTotalPrice,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <Col sm={3} className="mb-3">
        <div className={style.menu_item_img}>
          <img src={img} alt="menu item img" />
          <span className={style.menu_item_price}>{price}</span>
        </div>
      </Col>
      <Col sm={9} className="mb-5">
        <div className={style.item_description}>
          <h4>{name}</h4>
          <p className="m-0">{description}</p>
          <div className={style.order_btn}>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(
                  addToOrder({ id, img, name, price, count, itemTotalPrice })
                );
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
