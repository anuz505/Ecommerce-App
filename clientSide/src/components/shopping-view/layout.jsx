import { Outlet } from "react-router-dom";
import ShoppingviewHeader from "./header";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}

      <ShoppingviewHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default ShoppingLayout;
