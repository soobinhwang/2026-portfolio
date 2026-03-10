import { useEffect } from "react";
import { useLocation, Outlet } from "react-router";
import NavBar from "./NavBar";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
