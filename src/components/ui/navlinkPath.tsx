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
        `transition-all duration-200 hover:scale-[1.02] pb-1 border-b-2 ${
          isActive
            ? "text-destructive font-bold border-destructive"
            : "text-slate-600 hover:text-slate-900 border-transparent"
        }`
      }
    >
      {title}
    </NavLink>
  );
}
