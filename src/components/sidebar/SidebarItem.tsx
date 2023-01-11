import { NavLink } from "react-router-dom";

type SidebarItemProps = {
  to: string;
  activeClassName: string;
  label: string;
};

export const SidebarItem = ({
  to,
  activeClassName,
  label,
}: SidebarItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebar-link ${isActive && activeClassName}`
      }
    >
      {label}
    </NavLink>
  );
};
