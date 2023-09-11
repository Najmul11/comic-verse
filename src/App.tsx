import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollUpButton from "./pages/shared/ScrollUpButton/ScrollUpButton";

function App() {
  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />

      <ScrollToTop
        smooth
        top={1000}
        component={<ScrollUpButton />}
        className="scrollUpButton"
      />
      <Outlet />
    </>
  );
}

export default App;
