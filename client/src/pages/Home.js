import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Nav from '../components/Nav/index';
// import Nav from "../components/NavBar/Nav"
// import Categories from "../components/Categories/Categories";
// import DrinkCard from "../components/Card/Card"
// import ProductItem from "../components";


const Home = () => {
  return (
    <div className="container">
      <Nav/>
      <CategoryMenu/>
      <ProductList/>
      <Cart/>
    </div>
  );
};

export default Home;
