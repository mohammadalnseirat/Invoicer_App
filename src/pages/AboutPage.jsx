import { VscDebugBreakpointData } from "react-icons/vsc";
import CreateAccount from "../components/buttons/CreateAccount";
import LogIn from "../components/buttons/LogIn";

const AboutPage = () => {
  return (
    <>
      <section className="bg-teal-400 min-h-screen py-10 lg:py-20 ">
        <div className="max-w-6xl mx-auto flex flex-col items-center p-4">
          <h1 className="text-[40px] md:text-6xl font-mono font-bold text-slate-700 mb-5 lg:mb-8">
            About Invoicer{" "}
          </h1>
          <p className="w-full md:w-2/3 flex  gap-2 text-xl md:mx-auto ">
            <span className="text-xl text-red-600 mt-1">
              <VscDebugBreakpointData />
            </span>
            An Invoicer App is a web-based application designed to help
            businesses, freelancers, and service providers create, manage, and
            track invoices efficiently. It automates the billing process,
            reducing manual effort and ensuring timely payments. Users can
            generate professional invoices, send them to clients via email,
            track payment statuses, and manage business finances in one place
          </p>
          <ul className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5 mx-w-3xl mx-auto ">
            <li>
              <CreateAccount />
            </li>
            <li>
              <LogIn />
            </li>
          </ul>
        </div>
      </section>
      <div className="slant-left"></div>
    </>
  );
};

export default AboutPage;
