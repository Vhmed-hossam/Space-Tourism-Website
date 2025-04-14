import React, { useEffect } from "react";
import Layout from "./Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Home from "./Pages/Home/home";
import Aos from "aos";
import { Navigate } from "react-router-dom";
import Destinations from "./Pages/Destinations/destinations";
import Technology from "./Pages/Technology/technology";
import Crew from "./Pages/Crew/crew";
export default function App() {
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
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <RouterProvider router={spaceTourism} />
    </>
  );
}
