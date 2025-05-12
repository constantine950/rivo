import { Outlet } from "react-router";
import Header from "./Header";

function AppLayOut() {
  return (
    <div className="h-screen bg-[#292A2D]">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayOut;
