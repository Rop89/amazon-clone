import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/amazonservices/seller_success_stories/2020/07_Tony-Harris/tony-harris-1x-v3._CB408309378_.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <img
            className="checkout__emptyBasket"
            src="https://m.media-amazon.com/images/G/02/cart/empty/kettle-desaturated._CB424695504_.svg"
            alt=""
          />
          <p>You have no items in your basket.</p>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
          {basket?.map((item) => {
            return (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
            );
          })}
        </div>
      )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal/>
    </div>
  )}
  </div>
  );
}

export default Checkout;
