import { useState, useEffect } from "react";
import b1 from "../../assets/banners/PC_Hero_1x-toys._CB582765723_.jpg";
import b2 from "../../assets/banners/Nov_New_1500x600._CB542180708_.jpg";
import b3 from "../../assets/banners/Skincare-PCczx._CB539647709_.png";
import b4 from "../../assets/banners/Boult_1500x600-PC._CB543542644_.jpg";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    { id: 1, image: b1, alt: "Prime Day Deals" },
    { id: 2, image: b2, alt: "New Launches" },
    { id: 3, image: b3, alt: "Holiday Deals" },
    { id: 4, image: b4, alt: "Best Offers" },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <img
            key={banner.id}
            src={banner.image}
            alt={banner.alt}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-7xl bg-[#393d42c7]  text-white  rounded-lg  "
        onClick={prevSlide}
      >
        &lt;
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-7xl bg-[#393d42c7]  text-white  rounded-lg "
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Dots Navigation */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Banner;
