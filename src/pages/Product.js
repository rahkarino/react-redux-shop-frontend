import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Image, ListGroup } from "react-bootstrap";
import ProductItem from "../components/ProductItem/ProductItem";
import axios from "axios";

const Product = ({ match }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/products/${match.params.id}`
      );
      setProduct(response.data);
    };
    getProduct();
  }, [match]);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگشت به صفحه اصلی
      </Link>
      <Row>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
            <ListGroup.Item>
              <Button className="btn btn-success">افزودن به سبد خرید</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
      </Row>
    </div>
  );
};

export default Product;
