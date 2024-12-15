/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CATEGORY_GROUPS } from "../../constants/products.js";
import { useNavigate } from "react-router-dom";

const ExploreCard = () => {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate("/all");
  };
  return (
    <section className="mb-8 cursor-pointer">
      <div
        onClick={() => handleClick()}
        className="flex flex-row justify-center gap-x-2"
      >
        {CATEGORY_GROUPS.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-between w-1/4 bg-gray-50"
          >
            <h3 className="text-xl font-semibold p-2 max-h-20 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4 pb-4">
              {category.categories.map((subCategory) => (
                <div
                  key={subCategory.id}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={subCategory.image}
                    alt={subCategory.title}
                    className="w-32 h-20 object-cover "
                  />
                  <p className="text-sm font-semibold mt-2">
                    {subCategory.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCard;
