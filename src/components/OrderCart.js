import { Button, Col, Modal, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { makeOrder } from "../redux/coffeeSlice";

const OrderCart = (props) => {
  const { orderDetails, totalPrice } = useSelector((state) => state.coffee);
  console.log(orderDetails);
  const dispatch = useDispatch();
  return (
    <Modal
      {...props}
      size="md"
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
            orderDetails.map((order) => {
              return (
                <Col lg={6}>
                  <div>
                    <h4>{order.name}</h4>
                    <p>{order.price}</p>
                  </div>
                </Col>
              );
            })
          )}
        </Row>
        <p>Total price : {totalPrice}</p>
        {orderDetails.length > 0 ? (
          <Button
            onClick={() => {
              dispatch(makeOrder());
            }}
          >
            Check out
          </Button>
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
