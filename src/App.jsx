import { RouterProvider } from "react-router";
import Loader from "./Components/Loader/loading";
import Offline from "./Components/Offline/offline";
import useAppStates from "./Hooks/useAppStates";
import spaceTourism from "./Routing/spaceTourism";
export default function App() {
  const { loaded, isOnline } = useAppStates();
  if (!isOnline) {
    return <Offline />;
  }
  return <>{loaded ? <RouterProvider router={spaceTourism} /> : <Loader />}</>;
}
