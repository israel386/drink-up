import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Nav from '../components/Nav/index';


const Home = () => {
  return (
    <div className="container">
      <Nav/>
      <br/>
      <Cart/>
      <CategoryMenu/>
      <ProductList/>
    </div>
  );
};

export default Home;
