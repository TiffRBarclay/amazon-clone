import React from "react";
import "./Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="Amazon Exports"
        ></img>
        <div className="home-row">
          <Product
            id={1236549}
            name="The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id={956431}
            name="Kenwood Kmix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/41hbQSkaNxL._AC_.jpg"
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id={485216}
            name="Zevro Zero Gravity Magnetic Spice Rack with 12 Canisters"
            price={43.89}
            image="https://images-na.ssl-images-amazon.com/images/I/61gWcQJp3BL._AC_SX679_.jpg"
            rating={4}
          />

          <Product
            id={843125}
            name="Revlon One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary"
            price={41.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71aXzv34N%2BL._SX425_.jpg"
            rating={2}
          />
          <Product
            name="Oculus Quest All-in-one VR Gaming Headset – 128GB"
            price={499.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71D9OsZmWxL._SX522_.jpg"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id={74156}
            name="AOC CQ34G2 Super Curved Frameless Gaming Monitor, UltraWide FHD 2560x1080, 1500R VA Panel, 1ms MPRT, 75Hz, FreeSync, Height Adjustable, 3-Yr Zero Dead Pixels"
            price={309.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41%2BCXFgQwjL._AC_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
