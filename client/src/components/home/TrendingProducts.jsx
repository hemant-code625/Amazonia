import ProductCard from "../ProductCard";
import { TRENDING_PRODUCTS } from "../../constants/products";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const TrendingProducts = () => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener("scroll", updateScrollState);

    return () => container.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <>
      <div className="relative max-w-[83rem] mx-auto px-6">
        <button
          onClick={() => handleScroll("left")}
          className={`absolute top-1/2 left-0 transform -translate-y-1/2  bg-[#393d42c7] text-white rounded-full p-2 z-10 transition-opacity duration-300 ${
            canScrollLeft ? "opacity-100" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!canScrollLeft}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
          <div
            ref={containerRef}
            className="flex overflow-x-scroll no-scrollbar scrollbar-hidden gap-6"
          >
            {TRENDING_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[calc(100%-8rem)] md:w-1/2 lg:w-1/4 relative"
              >
                {/* <span className="absolute top-2 left-2 z-10 bg-red-500 text-white px-2 py-1 rounded-md">
                  -{product.discount}%
              </span> */}
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>

        <button
          onClick={() => handleScroll("right")}
          className={`absolute top-1/2 right-0 transform -translate-y-1/2  bg-[#393d42c7] text-white rounded-full p-2 z-10 transition-opacity duration-300 ${
            canScrollRight ? "opacity-100" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!canScrollRight}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default TrendingProducts;
