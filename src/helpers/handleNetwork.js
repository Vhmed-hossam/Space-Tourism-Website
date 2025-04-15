import { useEffect, useState } from "react";
export default function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateNetwork = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", updateNetwork);
    window.addEventListener("offline", updateNetwork);

    return () => {
      window.removeEventListener("online", updateNetwork);
      window.removeEventListener("offline", updateNetwork);
    };
  }, []);

  return isOnline;
}
