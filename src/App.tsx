import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MakeOrderPage from "./pages/make-order-page";
import TicketsPage from "./pages/tickets-page";

import { Layout } from "./components/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TicketsPage />
      },
      {
        path: "/make-order",
        element: <MakeOrderPage />
      }
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App;