import { createBrowserRouter } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "../imports/LandingPage";
import AiProjectPage from "../imports/AiProjectPage";
import AboutPage from "../imports/AboutPage";
import EngagementPlatform from "../imports/EngagementPlatform";
import AiProject1Detail from "../imports/AiProject1Detail";

export const router = createBrowserRouter([
  {
    Component: ScrollToTop,
    children: [
      {
        path: "/",
        Component: LandingPage,
      },
      {
        path: "/ai",
        Component: AiProjectPage,
      },
      {
        path: "/ai/project-1",
        Component: AiProject1Detail,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/engagement-platform",
        Component: EngagementPlatform,
      },
    ],
  },
]);
