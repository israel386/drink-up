import React from "react";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";
import Nav from "../components/NavBar/Nav"
import Categories from "../components/Categories/Categories";
import Carousel from "../components/Carousel/Body";
import Body from "../components/Carousel/Body";
import DrinkCard from "../components/Card/Card";

const Home = () => {
  return (
    <div>
      <Nav/>
      <br/>
      <Categories/>
      <br/>
      {/* <Body/> */}
      <br/>
      <DrinkCard/>
    </div>
    
  );
};

export default Home;
