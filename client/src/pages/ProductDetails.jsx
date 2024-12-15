import { useParams } from "react-router-dom";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductSpecs from "../components/product/ProductSpecs";
import AddToCart from "../components/product/AddToCart";
import RelatedProducts from "../components/product/RelatedProducts";
import { useEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock product data (replace with actual data fetching)
  const product = {
    id: 1,
    title: "Pigeon Electric Kettle (1.5L, Stainless Steel)",
    price: 349.0,
    mrp: 3469.0,
    discount: 39,
    rating: 4.5,
    reviewCount: "5,529",
    images: [
      {
        url: "https://placehold.co/600x600?text=Kettle+1",
        alt: "Kettle front view",
      },
      {
        url: "https://placehold.co/600x600?text=Kettle+2",
        alt: "Kettle side view",
      },
    ],
    specs: {
      Capacity: "1.5 litres",
      Material: "Stainless Steel, Plastic",
      Voltage: "240",
      Wattage: "1300 Watts",
    },
    features: [
      "CLASSIC DESIGN: The classical mirror polish of the appearance makes your electric kettle unique and aesthetic",
      "CORDLESS POURING: The electric kettle can be easily lifted from its swivel base for easy filling",
      "CONVENIENT: The cordless & BPA-Free electric kettle makes a striking presence on any kitchen counter",
      "FAST BOIL: This 1500W electric kettle has concealed heating elements",
      "EASY CLEAN: Use white vinegar, baking soda, water, cleaning bottle brush and microfiber cloth",
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <ProductGallery images={product.images} />
        </div>

        <div className="md:col-span-1">
          <ProductInfo product={product} />
          <ProductSpecs specs={product.specs} />
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <AddToCart price={product.price} />
        </div>
      </div>

      <div className="mt-12">
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
