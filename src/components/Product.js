import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../ReactContextAPI/StateProvider";

function Product({ id, name, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch item to data layer using reducer action
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{name}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <div key={i}>
                <StarIcon />
              </div>
            ))}
        </div>
      </div>
      <img src={image} alt={name} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
