import { DashboardPage } from "pages/dashboard";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { App } from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/dashboard" /> },
      { path: "dashboard", element: <DashboardPage /> },
    ],
  },
]);

export default router;
