import { GrClose } from "react-icons/gr";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { RiEmotionHappyLine } from "react-icons/ri";
import { HiOutlineEmojiSad } from "react-icons/hi";

const LogOutModel = ({ setShowModelLogOut }) => {
  return (
    <div className="transition-all duration-300 bg-gray-900/70 fixed  left-0 right-0 bottom-0 top-0 z-20 ">
      <div className="w-[90%] md:w-9/12 max-w-2xl mx-auto p-4 md:p-8 bg-gray-100 border border-gray-600  rounded shadow-md fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="flex items-center justify-between mb-4">
          <h2 className=" text-xl md:text-3xl font-bold text-gray-800">
            Confirm Log Out
          </h2>
          <button
            onClick={() => setShowModelLogOut(false)}
            className="bg-red-600 hover:bg-red-700 hover:rotate-180 text-white  p-1 md:p-2 rounded-full cursor-pointer transition-all duration-300 group"
          >
            <GrClose className="text-white" />
          </button>
        </div>
        <p className="text-gray-900 w-full font-medium flex items-center mb-10">
          <VscDebugBreakpointLog className="text-red-600 mr-1" />
          Are you sure you want to log out?
        </p>
        <div className="flex flex-col sm:flex-row items-center w-full gap-4 md:justify-between">
          <button
            onClick={() => setShowModelLogOut(false)}
            className=" py-2 px-4  bg-emerald-600 flex items-center font-medium md:font-semibold cursor-pointer
          gap-2 text-white rounded shadow hover:ring-4 hover:ring-emerald-400 transition-all duration-300"
          >
            No, Cancel
            <RiEmotionHappyLine className="  text-amber-500 text-xl" />
          </button>
          <button className="py-2 px-4 bg-red-600 rounded font-medium md:font-semibold shadow flex items-center gap-2  text-white hover:ring-4 hover:ring-red-500 transition-all duration-300 ">
            Yes, Log Out
            <HiOutlineEmojiSad className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModel;
