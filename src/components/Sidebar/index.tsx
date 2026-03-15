"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  LayoutGrid,
  Package,
  Users,
  BarChart3,
  ReceiptText,
  LogOut,
  LogIn,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { useAuthStore } from "@/stores/useAuthStore";

const SideBar = () => {
  const Pathname = usePathname() === "/" ? "/" : usePathname().split("/")[1];
  const { auth, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };
  return (
    <>
      <nav className="w-24 bg-white border-r border-gray-300/40 flex flex-col justify-between z-20">
        <div>
          <div className="p-4 flex justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-blue-200 shadow-lg">
              P
            </div>
          </div>

          <div className="space-y-1">
            <SidebarItem
              icon={BarChart3}
              label="แดชบอร์ด"
              id="/"
              active={Pathname === "/"}
            />
            <SidebarItem
              icon={LayoutGrid}
              label="หน้าขาย"
              id="sales"
              active={Pathname === "sales"}
            />
            <SidebarItem
              icon={Package}
              label="สินค้า"
              id="inventory"
              active={Pathname === "inventory"}
            />
            <SidebarItem
              icon={Users}
              label="พนักงาน"
              id="staff"
              active={Pathname === "staff"}
            />

            <SidebarItem
              icon={ReceiptText}
              label="ใบเสร็จ"
              id="receipt"
              active={Pathname === "receipt"}
            />
          </div>
        </div>
        <div className="mb-4  pt-4">
          {auth ? (
            <SidebarItem
              icon={LogOut}
              label="ออกจากระบบ"
              id="logout"
              active={false}
              onClick={() => handleLogout()}
            />
          ) : (
            <SidebarItem
              icon={LogIn}
              label="เข้าสู่ระบบ"
              id="login"
              active={false}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default SideBar;
