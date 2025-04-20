import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Pages/Home/home";
import Technology from "../Pages/Technology/technology";
import Crew from "../Pages/Crew/crew";
import Destinations from "../Pages/Destinations/destinations";
import Layout from "../Layout/Layout";

const spaceTourism = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destinations />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default spaceTourism;
