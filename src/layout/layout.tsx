import { Outlet } from "react-router";
import Navbar from "@/layout/navbar";

export default function Layout() {
  return (
    <section className="bg-background">
      <Navbar />
      <article className="pt-5 min-h-screen">
        <Outlet />
      </article>
    </section>
  );
}
