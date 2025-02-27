import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

export default function CustomerLayout() {
  return (
    <>
      <Navbar />

      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
