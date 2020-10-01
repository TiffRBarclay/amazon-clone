import React from "react";
import "./Order.css";
import moment from "moment";
import BasketItem from "./BasketItem";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, i) => (
        <div className="order-item" key={i}>
          <BasketItem
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        </div>
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order-total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
