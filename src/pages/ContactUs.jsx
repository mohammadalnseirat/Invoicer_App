import { BsFillSendFill } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="min-h-screen mt-10 md:mt-20">
      <div className="max-w-4xl mx-auto  py-10  p-4 flex flex-col md:flex-row items-center justify-center gap-10 ">
        {/* Left Side start here  */}
        <div className="flex-1 order-2 md:order-1">
          <div className="flex flex-col items-center gap-5 px-2 md:px-0">
            <div className="w-96 h-96 relative">
              <img
                src="/invoice.png"
                alt="contact-logo"
                className=" object-cover w-full h-full animate-pulse"
              />
            </div>
            <p className="text-center text-base md:text-md text-gray-600 px-2 md:px-4 py-2 border border-yellow-500 bg-slate-100 rounded-full">
              Please enter your details and we will get back to you{" "}
            </p>
          </div>
        </div>
        {/* left side end here */}
        {/* Right side start here */}
        <div className="flex-1 order-1 md:order-2">
          <div className="bg-white p-6 rounded-lg shadow border border-teal-400">
            <form className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="username"
                  className="cursor-pointer text-md text-slate-700"
                >
                  Your Name:
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your name"
                  className="px-4 py-2 border bg-white border-gray-600 rounded focus:border-teal-400  focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label
                  htmlFor="email"
                  className="cursor-pointer text-md text-slate-700"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-gray-600 rounded focus:border-teal-400  focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="cursor-pointer text-md text-slate-700"
                >
                  Message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  maxLength={"500"}
                  placeholder="Enter your message"
                  className="px-4 py-2 border resize-none border-gray-600 rounded focus:border-teal-400  focus:outline-none"
                ></textarea>
              </div>
              <button className="bg-teal-500 flex items-center justify-center gap-2 py-2 px-6 font-[400] shadow cursor-pointer text-base rounded-lg text-white hover:bg-teal-600 hover:ring-4 hover:ring-teal-500 transition-all duration-300 ">
                Send Message <BsFillSendFill className="mt-0.5" />
              </button>
            </form>
          </div>
        </div>
        {/* Right side end here */}
      </div>
    </div>
  );
};

export default ContactUs;
