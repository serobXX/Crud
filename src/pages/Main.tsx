import { Outlet } from "react-router-dom";
import Header from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Main() {
  return (
    <div className="w-full">
      <Header />
      <div className="flex  gap-6 h-full">
        <Sidebar />
        jhkhjkyjh
      </div>
      <Outlet />
    </div>
  );
}
