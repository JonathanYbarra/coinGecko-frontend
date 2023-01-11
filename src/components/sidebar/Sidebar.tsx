import { COIN_LIST_ROUTE, DASHBOARD_ROUTE } from "router";
import { SidebarItem } from "./SidebarItem";
import logo from "assets/coasn_logo.png";
import "./sidebar.scss";

export const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
      </div>

      <div className="sidebar-items">
        <SidebarItem
          to={DASHBOARD_ROUTE}
          activeClassName="active"
          label="Dashboard"
        />

        <SidebarItem
          to={COIN_LIST_ROUTE}
          activeClassName="active"
          label="All coins"
        />
      </div>
    </aside>
  );
};
