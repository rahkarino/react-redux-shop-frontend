import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductItem from "../components/ProductItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../action/productAction";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div>
      <h1>محصولات</h1>
      {loading ? (
        <b>در حال دریافت محصولات</b>
      ) : (
        <Row>
          {products.map((item, index) => {
            return (
              <Col sm={12} md={6} lg={4} key={index}>
                <ProductItem product={item} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default Home;
