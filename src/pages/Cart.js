import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../action/cartAction";
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";

const Cart = ({ match }) => {
  const productId = match.params.id;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);

  const onRemoveCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>سبد خرید</h2>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <span>سبد خالی است</span>
          ) : (
            <ListGroup>
              {cartItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid />
                    </Col>
                    <Col md={3}>{item.name}</Col>
                    <Col md={2}>{item.price}</Col>
                    <Col md={2}>
                      <Button
                        className="btn btn-danger"
                        onClick={() => onRemoveCartHandler(item.product)}
                      >
                        <i className="fa fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                مجموع:{" "}
                <b>
                  {cartItems.reduce((acc, current) => acc + current.price, 0)}
                </b>{" "}
                ریال
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
