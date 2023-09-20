import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import AllBooks from "../pages/allBooks/AllBooks";
import AddNewBook from "../pages/addNewBook/AddNewBook";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import BookDetails from "../pages/bookDetail/BookDetails";
import EditBook from "../pages/editBook/EditBook";
import NotFound from "../pages/notFound/NotFound";

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
            path: "/all-books/:id",
            element: <BookDetails />,
          },
          {
            path: "/add-new-book",
            element: <AddNewBook />,
          },
          {
            path: "/edit-book/:id",
            element: <EditBook />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <Register />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
