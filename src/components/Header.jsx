import { Link } from "react-router-dom";
import MobileNavLink from "./MobileNavLink";
import MainNavLink from "./MainNavLink";
import { Button } from "@mui/material";
import SignUpForm from "./form/SignUpForm";
import { useState } from "react";
import SearchMovie from "./SearchMovie";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className=" max-auto flex justify-between items-center w-full">
        {/* logo */}
        <div className="space-x-2 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tighter">
            MovieStreamer
          </Link>

          <div className="lg:hidden">
            <MobileNavLink />
          </div>
        </div>
        <div className="hidden lg:block">
          <MainNavLink />
        </div>

        {/* search and signUp */}
        <div className="flex items-center space-x-2">
          <SearchMovie />
          <Link to="/">
            <Button
              variant="outlined"
              style={{ color: "black", border: "1px solid black" }}
              onClick={handleOpen}
            >
              Sign up
            </Button>
          </Link>
          <SignUpForm open={open} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default Header;
