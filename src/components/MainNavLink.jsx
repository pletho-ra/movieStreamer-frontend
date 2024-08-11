import { Link } from "react-router-dom";

const MainNavLink = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="ml-6">
        <Link to="/" className="text-lg">
          Movies
        </Link>
      </div>
      <div className="ml-6">
        <Link to="/" className="text-lg">
          Series
        </Link>
      </div>
      <div className="ml-6">
        <Link to="/" className="text-lg">
          Contact
        </Link>
      </div>
      <div className="ml-6">
        <Link to="/" className="text-lg">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default MainNavLink;
