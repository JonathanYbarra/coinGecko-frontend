import { CoinDetailPage } from "pages/coin";
import { HomePage } from "pages/home";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { App } from "../App";
import { CoinsPage } from "../pages/coins/CoinsPage";
import { COIN_LIST_ROUTE, COIN_ROUTE, HOME_ROUTE } from "./routes-list";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={HOME_ROUTE} /> },
      { path: HOME_ROUTE, element: <HomePage /> },
      { path: COIN_LIST_ROUTE, element: <CoinsPage /> },
      { path: COIN_ROUTE + "/:id", element: <CoinDetailPage /> },
    ],
  },
]);
