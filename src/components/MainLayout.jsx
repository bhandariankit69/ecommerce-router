import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white  dark:bg-black">
      <Navbar />
      <main className="ml-60">
        <Outlet />
      </main>
    </div>
  );
}
