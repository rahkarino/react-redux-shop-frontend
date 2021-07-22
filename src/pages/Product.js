import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Image, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productDetailAction } from "../action/productAction";

const Product = ({ history, match }) => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, product } = productDetail;

  useEffect(() => {
    dispatch(productDetailAction(match.params.id));
  }, [match, dispatch]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}`)
  };

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگشت به صفحه اصلی
      </Link>
      {loading ? (
        <b>در حال دریافت اطلاعات محصول</b>
      ) : (
        <Row>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>{product.price}</ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn btn-success" onClick={addToCartHandler}>
                  افزودن به سبد خرید
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Product;
