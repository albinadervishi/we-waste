import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { SkipSelectionPage } from "./pages/SelectSkip";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        element: <SkipSelectionPage />,
      },
    ],
  },
]);

export default router;
