import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import FooterCom from "./components/FooterCom";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div className="bg-teal-200">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <FooterCom />
      </BrowserRouter>
    </div>
  );
};

export default App;
