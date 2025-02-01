import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navbarLinks } from "../constant/data";
import CreateAccount from "./buttons/CreateAccount";
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import LogOut from "./buttons/LogOut";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = () => {
  const { pathname } = useLocation();

  const user = true;
  const [links, setLinks] = useState(navbarLinks);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-teal-200 sticky top-0 z-50 shadow border-b border-teal-500">
      <div className="flex  items-center justify-between lg:max-w-7xl lg:mx-auto p-5 2xl:px-0">
        <Link to="/">
          <h2 className="font-bold text-3xl font-mono text-slate-800">
            Invoicer App
          </h2>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {links.map(({ id, title, path }) => (
              <li
                key={id}
                className={`text-gray-800 text-lg font-semibold hover:text-gray-900  ${
                  pathname === path
                    ? " text-yellow-500 underline underline-offset-2"
                    : ""
                }`}
              >
                <Link to={path}>{title}</Link>
              </li>
            ))}
            <li>{user ? <LogOut /> : <CreateAccount />}</li>
          </ul>
        </nav>
        {/* Menu button */}
        <div className="md:hidden">
          <button>
            {isOpen ? (
              <AiOutlineClose
                onClick={() => setIsOpen(false)}
                className="text-red-600 cursor-pointer size-8 hover:text-red-700 hover:rotate-180 transition-all duration-200"
              />
            ) : (
              <TiThMenuOutline
                onClick={() => setIsOpen(true)}
                className="text-green-600 size-8  hover:text-green-700 cursor-pointer transition-colors duration-200 "
              />
            )}
          </button>
        </div>
      </div>

      <ResponsiveNavbar
        links={links}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        pathname={pathname}
      />
    </header>
  );
};

export default Header;
