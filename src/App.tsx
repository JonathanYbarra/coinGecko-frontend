import { Outlet } from "react-router-dom";
import { Sidebar } from "components/sidebar";
import { Navbar } from "./components/navbar/Navbar";

export const App = () => {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="container-outlet">
        <Navbar />

        <Outlet />
      </main>
    </div>
  );
};
