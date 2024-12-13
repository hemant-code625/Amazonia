/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="relative">
      <div className="sticky top-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].alt}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="mt-4 flex space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 border-2 ${
                selectedImage === index
                  ? "border-amazon-orange"
                  : "border-transparent"
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-16 h-16 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
