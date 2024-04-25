import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";
import Ask from "./components/Ask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/ask",
    element: <Ask />,
  },
]);

export default router;
