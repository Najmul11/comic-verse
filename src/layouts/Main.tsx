import { Outlet } from "react-router-dom";
import Header from "../pages/shared/header/Header";
import Footer from "../pages/shared/footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
