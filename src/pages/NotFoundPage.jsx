import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600 mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="mt-6">
          <Button variant="contained" color="primary">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
