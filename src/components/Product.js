import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ name, price, image, rating }) {
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
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
