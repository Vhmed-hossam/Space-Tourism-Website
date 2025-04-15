import { WifiOff } from "lucide-react";

export default function Offline() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <WifiOff className="size-24 text-caution" />
      <h1 className="text-2xl font-bold text-caution">you are offline!</h1>
      <p className="text-base text-caution">
        Please check your internet connection and try again , once you connect ,
        the content will be available
      </p>
    </div>
  );
}
