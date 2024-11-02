import React from "react";
import { useNavigate } from "react-router-dom";
// import mango_leaf from "../assets/mango_Leaf.jpg"

const GalleryCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/single-page/${product.id}`)}>
      <div className="h-[20rem] w-[20rem] hover:shadow-2xl ">
        <img
          className="h-full w-full object-cover p-5"
          src={product.imageUrl}
          alt="img"
        />
      </div>
    </div>
  );
};

export default GalleryCard;
