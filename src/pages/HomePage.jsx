import CallToAction from "../components/CallToAction";

const HomePage = () => {
  return (
    <>
      <div className=" mt-5 md:mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 py-10 md:py-20 ">
          {/* Left side start here */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl text-slate-700 font-bold">
              Create invoices with Invoicer
            </h1>
            <p className="mt-2 text-slate-800">
              Easily create, download and print{" "}
              <span className="text-red-600 font-bold capitalize">
                invoices
              </span>{" "}
              for your clients. No more unsurety, just Invoicer It!
              <br />
              Tracking payments, and{" "}
              <span className="font-bold text-green-600">
                managing client transactions.
              </span>{" "}
              It saves time, reduces errors, and ensures timely payments with
              features like recurring billing, tax calculations, and payment
              reminders.
            </p>
          </div>
          {/* Left side end here */}
          {/* Right side start here */}
          <div className="flex-1">
            <img
              src="/invoicerv2png.png"
              alt="Invoice App"
              className=" object-cover w-full h-full rounded-xl shadow"
            />
          </div>
          {/* Right side end here */}
        </div>
      </div>
      <div className="slant"></div>
      <CallToAction />
    </>
  );
};

export default HomePage;
