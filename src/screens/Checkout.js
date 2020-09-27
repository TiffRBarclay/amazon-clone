import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon-ad"
        />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {/* Bakset Item */}
          {/* Bakset Item */}
          {/* Bakset Item */}
          {/* Bakset Item */}
          {/* Bakset Item */}
        </div>
      </div>

      <div className="checkout-right">
        <h2>The Subtotal Section</h2>
      </div>
    </div>
  );
}

export default Checkout;
