import { NavLink } from "react-router";

type NavLinkPathProps = {
  path: string;
  title: string;
  onClick?: () => void;
};

export default function NavLinkPath({ path, title, onClick }: NavLinkPathProps) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? "text-destructive font-bold"
          : "text-slate-600 hover:text-slate-950"
      }
    >
      {title}
    </NavLink>
  );
}
