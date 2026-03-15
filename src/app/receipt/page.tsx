"use client";

import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

import TableCustom from "@/components/TableCustom";
import { Column } from "@/types";

const ReceiptList = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const columns: Column<any>[] = [
    {
      title: "รหัสใบเสร็จ",
      key: "id",
    },
    {
      title: "วันที่",
      key: "date",
    },
    {
      title: "ยอดรวม",
      key: "total",
    },
    {
      title: "จัดการ",
      key: "action",
      render: (_, record) => {
        return (
          <div className="flex justify-start gap-2 group-hover:opacity-100 transition-opacity ">
            <button
              // onClick={() => router.push(record.id)}
              onClick={() => router.push(`/receipt/${record.id}`)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
            >
              <Eye size={18} />
            </button>
          </div>
        );
      },
    },
  ];

  const dataSource: any[] = [
    {
      id: "11234",
      date: "Mike",
      total: "32",
    },
  ];

  const onSearch = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <>
      <div className="flex-1 bg-slate-50 overflow-y-auto p-8">
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black text-slate-800">
                จัดการใบเสร็จ
              </h2>
              <p className="text-slate-500 font-medium">
                จัดการใบเสร็จในระบบของคุณ
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="ค้นหาสินค้า"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 "
                  size={18}
                />
                <button className="pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none appearance-none font-bold text-slate-600 cursor-pointer hover:bg-blue-600 hover:text-white active:scale-95 transition-all ">
                  ค้นหา
                </button>
              </div>
            </div>
          </div>

          <TableCustom columns={columns} dataSource={dataSource} />
        </div>
      </div>
    </>
  );
};

export default ReceiptList;
