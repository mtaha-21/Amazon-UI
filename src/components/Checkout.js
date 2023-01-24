import React from "react";
import "./Checkout.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Header from "./Header";
import Footer from "./Footer";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout-left">
          <img
            className="checkout-ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />

          <div>
            <h2 className="checkout-title">
              <ShoppingCartOutlinedIcon className="checkout-basket-icon" />
              Your Shopping Cart{" "}
            </h2>

            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
