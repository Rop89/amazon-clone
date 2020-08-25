import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/f4b165f5-678a-48bb-a049-11e7ddc2168d._UR3000,600_SX1500_FMjpg_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="121222"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses "
          price={10.38}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="1213322"
          title="Midnight Sun "
          price={11}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41co7ojYQYL._AC_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123222"
          title="Good Omens Kindle Edition "
          price={0.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51kgNU+LDsL._SY346_.jpg"
        />
        <Product
          id="127222"
          title="The Minders: Five strangers guard our secrets. Four can be trusted"
          price={0.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41k-fTBNwBL.jpg"
        />
        <Product
          id="127722"
          title="Chosen Ones: the Sunday Times bestseller"
          price={11.36}
          rating={5}
          image="https://m.media-amazon.com/images/I/51s7L6Au4fL.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="554622"
          title="Philips 328E1CA/00 31.5 Widescreen VA W-LED Black Curved Monitor Built in speakers"
          price={369}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61JQffEakHL._AC_SL1181_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
