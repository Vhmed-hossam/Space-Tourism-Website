import { createBrowserRouter } from "react-router-dom";

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

  export default spaceTourism