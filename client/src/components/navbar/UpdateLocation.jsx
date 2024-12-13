import { Link } from "react-router-dom";
import location_icon from "../../assets/navbar/location-icon.png";

const UpdateLocation = () => {
  return (
    <Link to="/" className="hover:border-2 p-1 ml-4">
      <div className="flex items-center">
        <img src={location_icon} alt="location icon" className="w-8" />
        <div>
          <div className="text-sm">Delivering to you</div>
          <div className="font-bold">Update Location</div>
        </div>
      </div>
    </Link>
  );
};

export default UpdateLocation;
