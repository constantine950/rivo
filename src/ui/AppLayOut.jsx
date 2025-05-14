import { Outlet } from "react-router";
import Header from "./Header";

function AppLayOut() {
  return (
    <div className="">
      <Header />

      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayOut;
