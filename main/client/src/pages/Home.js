import React from "react";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";
import Nav from "../components/NavBar/Nav"
import Categories from "../components/Categories/Categories";
import DrinkCard from "../components/Card/Card"
// import ProductItem from "../components";


const Home = () => {
  return (
    <div>
      <Nav/>
      <br/>
      <Categories/>
      <br/>
      {/* <ProductItem/> */}
     <DrinkCard/>
    </div>
    
  );
};

export default Home;
