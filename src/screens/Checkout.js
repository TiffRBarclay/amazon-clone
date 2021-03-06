import React from "react";
import "./Checkout.css";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../ReactContextAPI/StateProvider";
import BasketItem from "../components/BasketItem";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon-ad"
        />
        <div>
          <h3 className="checkout-user">
            {user ? `Hello, ${user.email}` : ""}
          </h3>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {basket.map((item, i) => (
            <div key={i}>
              <BasketItem
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
