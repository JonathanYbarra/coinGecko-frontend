import logo from "assets/coasn_logo.png";
import "./sidebar.scss";

export const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
      </div>
    </aside>
  );
};
