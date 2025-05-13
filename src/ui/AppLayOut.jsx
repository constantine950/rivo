import { Outlet } from "react-router";
import Header from "./Header";

function AppLayOut() {
  return (
    <div className="h-full bg-[#292A2D]">
      <Header />

      <main className="pt-20 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayOut;
