import React from "react";
import Layout from "./Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
export default function App() {
  const spaceTourism = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{}, {}, {}, {}],
    },
  ]);
  return (
    <>
      <RouterProvider router={spaceTourism} />
    </>
  );
}
