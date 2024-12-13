/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CATEGORY_GROUPS } from "../../constants/products.js";

const ExploreCard = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center">
        {CATEGORY_GROUPS.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center w-1/4 bg-white m-2"
          >
            <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {category.categories.map((subCategory) => (
                <div
                  key={subCategory.id}
                  className="flex flex-col items-center"
                >
                  <img
                    src={subCategory.image}
                    alt={subCategory.title}
                    className="w-full m-4"
                  />
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
