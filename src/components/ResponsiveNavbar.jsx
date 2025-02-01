import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogOut from "./buttons/LogOut";
import CreateAccount from "./buttons/CreateAccount";

const ResponsiveNavbar = ({ links, pathname, setIsOpen, isOpen }) => {
  const user = true;
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full h-screen z-20"
        >
          <div className="text-lg bg-teal-800  font-semibold py-10 rounded-xl m-6 text-white">
            <ul className="flex flex-col items-center justify-center gap-5">
              {links.map(({ id, title, path }) => (
                <li
                  onClick={() => setIsOpen(false)}
                  key={id}
                  className={`${
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveNavbar;
