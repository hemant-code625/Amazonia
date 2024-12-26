// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ProductCard from "../ProductCard";

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      title: "Pigeon 2 Slice Auto Pop up Toaster",
      price: 1099.0,
      rating: 4.3,
      reviewCount: 3547,
      images: [
        {
          url: "https://placehold.co/600x600?text=Toaster+1",
          alt: "Toaster front view",
        },
      ],
    },
  ];

  const scroll = (direction) => {
    const container = document.getElementById("related-products");
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-bold mb-4">You may also like</h2>

      <div className="relative">
        {/* <button
          onClick={() => scroll("left")}
          className="absolute -left-20 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button> */}
        <div
          id="related-products"
          className="flex overflow-x-auto scrollbar-hidden space-x-4 pb-4"
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none w-64">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button> */}
      </div>
    </div>
  );
};

export default RelatedProducts;
