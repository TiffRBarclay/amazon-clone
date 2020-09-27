import React from "react";
import "./BasketItem.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../ReactContextAPI/StateProvider";

function BasketItem({ id, name, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="basket-item">
      <img src={image} alt={name} />
      <div className="basket-item-info">
        <p>{name}</p>
        <p className="basket-item-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basket-item-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <div key={i}>
                <StarIcon />
              </div>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default BasketItem;
