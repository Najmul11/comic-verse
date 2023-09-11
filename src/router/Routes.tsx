import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import AllBooks from "../pages/allBooks/AllBooks";
import AddNewBook from "../pages/addNewBook/AddNewBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/all-books",
            element: <AllBooks />,
          },
          {
            path: "/add-new-book",
            element: <AddNewBook />,
          },
        ],
      },
    ],
  },
]);
