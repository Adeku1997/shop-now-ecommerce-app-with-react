import React, { useContext } from "react";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import "./productcard.styles.scss";
import { addToCart } from "../../store/cart/cartAction";



const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={`${product.name}`} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={()=>dispatch(addToCart(product))}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
