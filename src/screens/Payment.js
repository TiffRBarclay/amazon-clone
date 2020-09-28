import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../ReactContextAPI/StateProvider";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import axios from "../axios";

import BasketItem from "../components/BasketItem";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../ReactContextAPI/Reducer";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate special stripe secret which allows us to charge customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-header">
        <h2 className="payment-title">
          Checkout{" "}
          <Link to="/checkout">{`(${basket.length} ${
            basket.length > 1 ? "items" : "item"
          })`}</Link>
        </h2>
      </div>
      <div className="payment-body">
        <div className="user-details payment-section">
          <h3 className="payment-section-title">Delivery Address</h3>
          <div className="delivery-details">
            <p>{user?.email}</p>
            <p>123 Fake Street</p>
            <p>Auckland, New Zealand</p>
          </div>
        </div>
        <div className="product-details payment-section">
          <h3 className="payment-section-title">Review Items and Delivery</h3>
          <div className="payment-items">
            {basket.map((item) => (
              <BasketItem
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment-details payment-section">
          <h3 className="payment-section-title">Payment Method</h3>
          <div className="payment-option">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-price-container">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
