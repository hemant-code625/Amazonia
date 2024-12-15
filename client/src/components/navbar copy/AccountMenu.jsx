import { Link } from 'react-router-dom';

function AccountMenu() {
  return (
    <Link to="/" className="hover:text-gray-300">
      <div>
        <div className="text-sm">Hello, Sign in</div>
        <div className="font-bold">Account & Lists</div>
      </div>
    </Link>
  );
}

export default AccountMenu;