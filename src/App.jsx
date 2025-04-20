import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { preloadImages } from "./helpers/preloadimages";
import { imageList } from "./Constants/imagelist";
import Loader from "./Components/Loader/loading";
import useNetworkStatus from "./helpers/handleNetwork";
import Offline from "./Components/Offline/offline";
import spaceTourism from "./Routing/spaceTourism";
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const isOnline = useNetworkStatus();

  useEffect(() => {
    preloadImages(imageList).then(() => {
      setLoaded(true);
    });
  }, []);
  if (!isOnline) {
    return <Offline />;
  }
  return <>{loaded ? <RouterProvider router={spaceTourism} /> : <Loader />}</>;
}
