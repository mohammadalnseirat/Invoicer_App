import {
  TbCircleDashedNumber1,
  TbCircleDashedNumber2,
  TbCircleDashedNumber3,
} from "react-icons/tb";
import { BsFillSendFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.2, // Stagger animations inside
    },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactUs = () => {
  return (
    <div className="min-h-screen mt-10 ">
      <AnimatePresence mode="wait">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className=" md:max-w-6xl mx-auto  flex flex-col md:flex-row p-6 gap-8 md:gap-10 justify-center  border-gray-400 "
        >
          {/* Left Side Start here */}
          <motion.div variants={childVariants} className="flex-1">
            <div className="flex flex-col border border-teal-400 shadow rounded p-6 gap-2 items-center  text-center md:text-left">
              <img
                src="/contactus.png"
                alt="contact-us"
                className="object-cover w-full "
              />

              <h2 className="text-3xl md:text-4xl text-slate-700 font-bold">
                Get In Touch
              </h2>
              <p className=" text-slate-900">
                {" "}
                We&apos;d love to hear from you. Fill out the form and our team
                will get back to you as soon as possible.
              </p>
            </div>
          </motion.div>
          {/* Left Side End Here */}
          {/* Right Side Start here */}

          <motion.div variants={childVariants} className="flex-1">
            <div className="flex flex-col py-8  gap-4 p-4 bg-white border border-gray-300 rounded-lg shadow">
              <h2 className="text-3xl md:text-4xl text-slate-700 font-bold font-mono text-center">
                Contact Us
              </h2>
              <form className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="username"
                    className="flex items-center gap-1 cursor-pointer text-gray-600"
                  >
                    <TbCircleDashedNumber1 className="text-red-600 w-5 h-5" />
                    User Name:
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your name..."
                    className="border border-gray-400 rounded-md p-2 focus:outline-none focus:border-teal-500 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-1 cursor-pointer text-gray-600"
                  >
                    <TbCircleDashedNumber2 className="text-red-600 w-5 h-5" />
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email..."
                    className="border border-gray-400 rounded-md p-2 focus:outline-none focus:border-teal-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center gap-1 cursor-pointer text-gray-600"
                  >
                    <TbCircleDashedNumber3 className="text-red-600 w-5 h-5" />
                    Message:
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    maxLength={500}
                    placeholder="Enter your message..."
                    className="border w-full resize-none border-gray-400 rounded-md p-2 focus:outline-none focus:border-teal-500 transition-all duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-teal-600 flex items-center justify-center px-4 py-2 rounded text-white w-full hover:bg-teal-700 hover:ring-4 hover:ring-teal-500 transition-all duration-300 cursor-pointer"
                >
                  Send Message
                  <BsFillSendFill className="ml-2 mt-1" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side End Here */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;
