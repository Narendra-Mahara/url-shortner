import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Redirect from "./component/Redirect.jsx"
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/:shortID" element={<Redirect/>} />
    </>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
