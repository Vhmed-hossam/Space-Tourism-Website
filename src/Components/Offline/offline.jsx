import { WifiOff } from "lucide-react";

export default function Offline() {
  return (
    <div className="flex items-center text-red-600 justify-center h-screen flex-col">
      <WifiOff className="size-24 " />
      <h1 className="text-2xl font-bold">you are offline!</h1>
      <p className="text-base text-center">
        Please check your internet connection and try again , once you connect ,
        the content will be available
      </p>
    </div>
  );
}
