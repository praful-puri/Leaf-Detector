import React from "react";
import { tree_info } from "../../data/tree_info.js";
import GalleryCard from "./GalleryCard.jsx";

const GallerySection = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center bg-white py-5 space-x-5 space-y-5 h-full">
        {tree_info.map((item) => (
          <GalleryCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
