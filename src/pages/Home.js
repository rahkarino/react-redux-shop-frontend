import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductItem from "../components/ProductItem/ProductItem";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:8000/api/products');
      setProducts(response.data)
    }
    getProducts()
  }, []);

  return (
    <div>
      <h1>محصولات</h1>
      <Row>
        {products.map((item, index) => {
          return (
            <Col sm={12} md={6} lg={4} key={index}>
              <ProductItem product={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
