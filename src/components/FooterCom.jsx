import { Link, useLocation } from "react-router-dom";
import CreateAccount from "./buttons/CreateAccount";
import LogIn from "./buttons/LogIn";
import LogOut from "./buttons/LogOut";

const FooterCom = () => {
  const { pathname } = useLocation();
  return (
    <footer className="bg-teal-900 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <h2 className="text-white text-5xl text-center md:text-left font-semibold font-mono">
          Invoicer
        </h2>
        <ul className="flex flex-col items-center gap-4 text-white font-semibold">
          <li
            className={`text-lg ${
              pathname === "/about"
                ? "text-yellow-500 text-lg underline underline-offset-2"
                : ""
            }`}
          >
            <Link to={"/about"}>About Invoicer</Link>
          </li>
          <li
            className={`text-lg ${
              pathname === "/"
                ? "text-yellow-500 text-lg underline underline-offset-2"
                : ""
            }`}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={` text-lg ${
              pathname === "/contact-us"
                ? "text-yellow-500 underline underline-offset-2"
                : ""
            }`}
          >
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
        <ul className="flex flex-col items-center md:justify-end gap-4">
          <li>
            <LogOut />
          </li>
          <li>
            <CreateAccount />
          </li>
          <li>
            <LogIn />
          </li>
        </ul>
      </div>
      <div className="mt-10 max-w-6xl mx-auto border-t border-teal-400">
        <div className="flex flex-col md:flex-row items-center justify-center text-white">
          <p className="text-center text-white font-semibold mt-5">
            &copy;{" "}
            <span className="text-teal-400">{new Date().getFullYear()}</span>{" "}
            Invoicer. All rights reserved.
          </p>
          <p className="md:mt-5 md:ml-1">
            by{" "}
            <a
              href="https://github.com/mohammadalnseirat"
              target="_blank"
              className="text-teal-400 underline"
            >
              Mohammad Alnseirat
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCom;
