import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AccountMenu = () => {
  const { user } = useSelector((state) => state.user);
  const firstName = user?.fullName.split(" ")[0];

  return (
    <Link to="/signin" className="hover:border-2 p-1">
      <div>
        <div className="text-sm">Hello, {user ? firstName : "Sign in"}</div>
        <div className="font-bold">Account & Lists</div>
      </div>
    </Link>
  );
};

export default AccountMenu;
