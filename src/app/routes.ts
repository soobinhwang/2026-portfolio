import { createBrowserRouter } from "react-router";
import LandingPage from "../imports/LandingPage";
import AiProjectPage from "../imports/AiProjectPage";
import AboutPage from "../imports/AboutPage";
import EngagementPlatform from "../imports/EngagementPlatform";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/ai",
    Component: AiProjectPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/engagement-platform",
    Component: EngagementPlatform,
  },
]);
