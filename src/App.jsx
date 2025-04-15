import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Home from "./Pages/Home/home";
import { Navigate } from "react-router-dom";
import Destinations from "./Pages/Destinations/destinations";
import Technology from "./Pages/Technology/technology";
import Crew from "./Pages/Crew/crew";
import { preloadImages } from "./helpers/preloadimages";
import { imageList } from "./Constants/imagelist";
import Loader from "./Components/Loader/loading";
export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    preloadImages(imageList).then(() => {
      setLoaded(true);
    });
  }, []);
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
  return <>
    {
      loaded ? (
        <RouterProvider router={spaceTourism} />
      ) : (
        <Loader/>
      )
    }
  </>;
}
