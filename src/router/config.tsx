import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ShowcasePage from "../pages/showcase/page";
import ThreeDModelPage from "../pages/three-d-model/page";
import AboutPage from "../pages/about/page";
import ContactPage from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/showcase",
    element: <ShowcasePage />,
  },
  {
    path: "/3d-model",
    element: <ThreeDModelPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;