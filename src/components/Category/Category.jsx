import React from "react";
import { Link } from "react-router-dom";
import "./category.styles.scss";

const Category = ({ category: { title, id, imageUrl } }) => {
  return (
    <Link to={`/shop/${title}`} >
      <div className="category-container">
          <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Buy now</p>
        </div>
      </div>
      </Link>
  );
};

export default Category;
