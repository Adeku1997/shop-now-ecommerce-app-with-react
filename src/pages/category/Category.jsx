import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import "./Category.styles.scss";
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from "../../store/category/categorySelector";

const Category = () => {
  const { category } = useParams();
  const  categoriesMap  = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      {" "}
      <h2 className="categoryy-title">{category.toUpperCase()}</h2>
      <div className="categoryy-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
