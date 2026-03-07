"use client";

import React from "react";
import {
  LayoutGrid,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  Search,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  Banknote,
  QrCode,
  LogOut,
  ChevronRight,
  TrendingUp,
  ArrowUpRight,
  ReceiptText,
  Boxes,
  AlertCircle,
  CalendarDays,
  Trophy,
  Edit3,
  Filter,
  MoreVertical,
  CheckCircle2,
  XCircle,
  PackagePlus,
} from "lucide-react";

interface ModalProps {
  open: boolean;
  onFinish?: () => void;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  okBtn?: string;
  cancelBtn?: string;
  formId?: string;
}
const Modal = ({
  open,
  onFinish,
  onClose,
  children,
  title,
  okBtn = "ตกลง",
  cancelBtn = "ยกเลิก",
  formId = "",
}: ModalProps) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center mb-2">
              <h3 className="text-xl font-black text-slate-800">
                {title ? title : ""}
              </h3>
              <button
                onClick={() => onClose()}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <XCircle />
              </button>
            </div>
            {children}
            <div className="border-t border-slate-100 p-4 flex gap-3 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-4 cursor-pointer bg-slate-100 text-slate-500 rounded-2xl font-bold hover:bg-slate-200 transition-colors"
              >
                {cancelBtn}
              </button>
              <button
                onClick={onFinish}
                form={formId}
                type="submit"
                className="flex-1 py-4 cursor-pointer bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all"
              >
                {okBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
