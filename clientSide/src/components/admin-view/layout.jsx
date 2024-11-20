import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./Header";

function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <AdminSideBar />
      <div className="flex flex-1 flex-col">
        {/* Sidebar Header */}
        <AdminHeader />
        <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AdminLayout;
