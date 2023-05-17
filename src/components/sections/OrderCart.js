// Style
import style from "../../css/sections/Cart.module.css";

// React bootstrap
import { Button, Col, Modal, Row } from "react-bootstrap";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseItem,
  deleteFromOrder,
  increaseItem,
  makeOrder,
} from "../../redux/coffeeSlice";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const OrderCart = (props) => {
  const { orderDetails, totalPrice } = useSelector((state) => state.coffee);
  const dispatch = useDispatch();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Order Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {orderDetails.length === 0 ? (
            <p>There is no order</p>
          ) : (
            orderDetails.map((order, index) => {
              return (
                <div key={index} className={style.cart}>
                  <Col lg={1} md={2} sm={12}>
                    <div className={style.order}>
                      <Button
                        className={style.delete_from_order}
                        onClick={() => dispatch(deleteFromOrder(order.id))}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </Button>
                    </div>
                  </Col>
                  <Col lg={3} md={2} sm={12}>
                    <div className={style.order_img}>
                      <img src={order.img} alt="order img" />
                    </div>
                  </Col>
                  <Col lg={4} md={2} sm={12}>
                    <div className={style.order}>
                      <h5>{order.name}</h5>
                    </div>
                  </Col>
                  <Col lg={2} md={4} sm={12}>
                    <div
                      className={`${style.order} ${style.content_center_order}`}
                    >
                      <Button
                        className={style.colored_btn}
                        onClick={() => {
                          dispatch(
                            increaseItem({ id: order.id, count: order.count })
                          );
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                      <p>{order.count}</p>
                      <Button
                        className={style.colored_btn}
                        onClick={() => {
                          dispatch(
                            decreaseItem({ id: order.id, count: order.count })
                          );
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                    </div>
                  </Col>
                  <Col lg={2} md={2} sm={12}>
                    <h5
                      className={`${style.order} ${style.content_center_order}`}
                    >
                      {order.itemTotalPrice}
                    </h5>
                  </Col>
                </div>
              );
            })
          )}
        </Row>
        <p className={style.total_price}>Total price : {totalPrice}</p>
        {orderDetails.length > 0 ? (
          <div className={style.check_out}>
            <Button
              className={style.colored_btn}
              onClick={() => {
                dispatch(makeOrder());
              }}
            >
              Check out
            </Button>
          </div>
        ) : (
          ""
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderCart;
