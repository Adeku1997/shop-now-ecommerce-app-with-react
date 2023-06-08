import React from "react";

import Category from "../Category/Category";
import "./categories.styles.scss"



const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl:
      "https://media.istockphoto.com/photos/business-woman-balancing-life-having-to-wear-too-many-hats-picture-id172708699?b=1&k=20&m=172708699&s=170667a&w=0&h=VEoqtynEmFcE969CRLUx_kcgkhgbP8n47eZH2A32mJM=",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://media.istockphoto.com/photos/leather-jacket-picture-id484543793?k=20&m=484543793&s=612x612&w=0&h=tlBqQCS7Jzf0pN3doSZl4zV8WyuQwWelM6AgeoVPkRw=",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://cdn.wallpapersafari.com/94/40/vjoyLS.jpg",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category key ={category.id}category={category} />
      ))}
    </div>
  );
};

export default Categories;
