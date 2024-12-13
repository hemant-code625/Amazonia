import Banner from "../components/home/Banner";
import BestOffers from "../components/home/BestOffers";
import ExploreCard from "../components/home/ExploreCard";
import TrendingProducts from "../components/home/TrendingProducts";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative">
        <Banner />
        <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4">
          {/* Explore Cards */}
          <ExploreCard />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[17rem]">
        <BestOffers />
        <TrendingProducts />
      </div>
    </div>
  );
};

export default Home;
