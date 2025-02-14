import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
