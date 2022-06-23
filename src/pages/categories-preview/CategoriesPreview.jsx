import React, { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";


import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/categorySelector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div >
      {Object.keys(categoriesMap) .map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview
