import { TextField } from "components/textField";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <span className="greeting">Hello..</span>

      <TextField placeholder="Search coin..." className="input-search" />

      <span>Flixxo</span>
    </nav>
  );
};
