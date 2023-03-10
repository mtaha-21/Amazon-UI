// import { CenterFocusStrongOutlined } from "@material-ui/icons";s
import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating, author, subtitle }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket >>> ", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>
            <b>₹</b>
          </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button
        style={{
          borderRadius: "8px",
          height: "25px",
        }}
        onClick={addToBasket}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
