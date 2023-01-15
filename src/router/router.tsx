import { CoinDetailPage } from "pages/coin";
import { DashboardPage } from "pages/dashboard";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { App } from "../App";
import { CoinsPage } from "../pages/coins/CoinsPage";
import { COIN_LIST_ROUTE, COIN_ROUTE, DASHBOARD_ROUTE } from "./routes-list";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={DASHBOARD_ROUTE} /> },
      { path: DASHBOARD_ROUTE, element: <DashboardPage /> },
      { path: COIN_LIST_ROUTE, element: <CoinsPage /> },
      { path: COIN_ROUTE + "/:id", element: <CoinDetailPage /> },
    ],
  },
]);
