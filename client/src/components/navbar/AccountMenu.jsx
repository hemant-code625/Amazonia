import { Link } from "react-router-dom";

const AccountMenu = () => {
  return (
    <Link to="/signin" className="hover:border-2 p-1">
      <div>
        <div className="text-sm">Hello, Sign in</div>
        <div className="font-bold">Account & Lists</div>
      </div>
    </Link>
  );
};

export default AccountMenu;
