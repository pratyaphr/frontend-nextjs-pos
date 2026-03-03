"use client";

import { useRouter } from "next/navigation";

type TabType = "sales" | "inventory" | "staff" | "/" | "settings";

interface SidebarItemProps {
  icon: any;
  label: string;
  id: TabType | "logout";
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  id,
  active,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => (id === "logout" ? router.push("/") : router.push(id))}
      className={`w-full flex flex-col items-center py-4 cursor-pointer transition-all ${active ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}
    >
      <Icon size={24} />
      <span className="text-[10px] mt-1 font-medium">{label}</span>
    </button>
  );
};

export default SidebarItem;
