import { RouterProvider } from "react-router";
import Loader from "./Components/Loader/loading";
import Offline from "./Components/Offline/offline";
import spaceTourism from "./Routing/spaceTourism";
import useAppStates from "./Hooks/useAppStates";
export default function App() {
  const { loaded, isOnline } = useAppStates();
  if (!isOnline) {
    return <Offline />;
  }
  return <>{loaded ? <RouterProvider router={spaceTourism} /> : <Loader />}</>;
}
