import { NavLink } from "react-router";

type NavLinkPathProps = {
  path: string;
  title: string;
};

export default function NavLinkPath({ path, title }: NavLinkPathProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "decoration-orange-300 font-bold underline underline-offset-8"
          : ""
      }
    >
      {title}
    </NavLink>
  );
}
