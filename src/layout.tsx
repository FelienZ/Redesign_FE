import { Outlet } from "react-router";
import Navbar from "./custom/navbar";

export default function Layout() {
  return (
    <article className="min-h-screen bg-background">
      <Navbar />
      <Outlet />
    </article>
  );
}
