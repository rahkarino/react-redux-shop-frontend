import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from "./pages/Product";
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {
  return (
   <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route component={Home} path="/" exact />
          <Route component={Product} path="/product/:id"/>
          <Route component={Cart} path="/cart/:id?" />
        </Container>
      </main>
      <Footer />
   </Router>
  );
};

export default App;
