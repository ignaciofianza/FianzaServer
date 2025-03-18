import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
