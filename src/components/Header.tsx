import { Users } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="h-16 bg-white border-b border-gray-300/40 px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-xl tracking-tight">POS System</h1>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />{" "}
              ONLINE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold leading-none text-slate-800">
              currentUser.name
            </p>
            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">
              currentUser.role
            </p>
          </div>
          <div className="w-10 h-10 bg-slate-100 rounded-xl border-2 border-white shadow-sm flex items-center justify-center text-slate-500 ">
            <Users size={20} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
