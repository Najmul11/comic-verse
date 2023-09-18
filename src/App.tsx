import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollUpButton from "./pages/shared/ScrollUpButton/ScrollUpButton";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useAppDispatch } from "./redux/hook";
import { setUser } from "./redux/slices/userSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken);

        dispatch(setUser(decodedToken));
      } catch (error) {
        console.error("Error decoding access token:", error);
      }
    }
  }, [dispatch]);

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
