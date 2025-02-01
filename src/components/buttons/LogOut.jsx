import { useState } from "react";
import LogOutModel from "../LogOutModel";

const LogOut = () => {
  const [showModelLogOut, setShowModelLogOut] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModelLogOut(true)}
        className=" bg-red-700 py-2 px-6 font-[400] shadow cursor-pointer text-base rounded-lg text-white hover:bg-red-800 hover:ring-4 hover:ring-red-600 transition-all duration-300 "
      >
        Log Out
      </button>

      {showModelLogOut && (
        <LogOutModel setShowModelLogOut={setShowModelLogOut} />
      )}
    </>
  );
};

export default LogOut;
