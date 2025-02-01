import CreateAccount from "./buttons/CreateAccount";
import LogIn from "./buttons/LogIn";

const CallToAction = () => {
  return (
    <>
      <div className="bg-[#33d1b1] py-10">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl text-slate-700 font-bold">
                Login or Create An Account to Get Started
              </h2>
              <p className="mt-2 text-slate-900">
                No credit cards, no subscriptions! Simply create an account and
                begin creating invoices for your clients.
              </p>
            </div>

            <div className="flex-1 flex flex-col md:flex-row gap-4">
              <CreateAccount />
              <LogIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
