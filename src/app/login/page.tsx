"use client";

import { useState } from "react";
import { RefreshCw, Lock, Delete, CheckCircle2 } from "lucide-react";

import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";

const Login = () => {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setAuth } = useAuthStore();
  const router = useRouter();

  const handleKeyPress = (num: string) => {
    if (pin.length < 6) {
      setPin((prev) => prev + num);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setPin("");
  };

  const handleConfirm = () => {
    setIsLoading(true);
    setAuth({
      user: {
        name: "Test",
        role: "manager",
      },
    });
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 800);
  };

  return (
    <>
      <div className=" w-full bg-[#F8FAFC] flex items-center justify-center p-4 font-sans text-slate-900 overflow-hidden relative">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-100/50 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-white p-10 md:p-12 text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-blue-200 mx-auto mb-8">
              <Lock size={36} strokeWidth={2.5} />
            </div>

            <h1 className="text-2xl font-black text-slate-800 tracking-tight mb-2">
              เข้าสู่ระบบพนักงาน
            </h1>
            <p className="text-slate-400 text-sm font-medium mb-10">
              กรุณาใส่รหัส PIN 6 หลักเพื่อเริ่มงาน
            </p>

            <div className="flex justify-center gap-4 mb-12">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full transition-all duration-200 border-2 ${
                    pin.length > i
                      ? "bg-blue-600 border-blue-600 scale-125 shadow-lg shadow-blue-100"
                      : "bg-slate-100 border-slate-200"
                  }`}
                />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-[320px] mx-auto">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                <button
                  key={num}
                  onClick={() => handleKeyPress(num)}
                  disabled={isLoading}
                  className="h-20 cursor-pointer bg-white border border-slate-100 rounded-[1.5rem] flex items-center justify-center text-2xl font-black text-slate-700 hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 active:scale-95 transition-all shadow-sm"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={handleClear}
                disabled={isLoading}
                className="h-20 cursor-pointer bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-xs font-black text-slate-400 uppercase tracking-widest hover:bg-slate-100 hover:text-slate-600 active:scale-95 transition-all"
              >
                ล้าง
              </button>
              <button
                onClick={() => handleKeyPress("0")}
                disabled={isLoading}
                className="h-20 cursor-pointer bg-white border border-slate-100 rounded-[1.5rem] flex items-center justify-center text-2xl font-black text-slate-700 hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 active:scale-95 transition-all shadow-sm"
              >
                0
              </button>
              <button
                onClick={handleDelete}
                disabled={isLoading}
                className="h-20 cursor-pointer bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 active:scale-95 transition-all"
              >
                <Delete size={24} />
              </button>
            </div>

            <button
              onClick={handleConfirm}
              disabled={isLoading || pin.length < 6}
              className={`w-full mt-8 py-5 rounded-2xl font-black text-white shadow-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                pin.length >= 6
                  ? "bg-slate-900 shadow-slate-200 hover:bg-blue-600 hover:shadow-blue-100"
                  : "bg-slate-200 cursor-not-allowed shadow-none"
              }`}
            >
              {isLoading ? (
                <>
                  <RefreshCw className="animate-spin" size={20} />
                  กำลังตรวจสอบรหัส...
                </>
              ) : (
                <>
                  <CheckCircle2 size={20} />
                  ยืนยันเข้าสู่ระบบ
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
