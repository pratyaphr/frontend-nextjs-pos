"use client";

import React, { useState } from "react";
import { Search, Trash2, Edit3, UserPlus, PackagePlus } from "lucide-react";

import Modal from "@/components/Modal";
import TableCustom from "@/components/TableCustom";
import { Column, SatffType } from "@/types";

const Staff = () => {
  const [open, setopen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    {
      title: "ผู้จัดการร้าน",
      value: "manager",
    },
    {
      title: "พนักงาน",
      value: "cashier",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      role: formData.get("role"),
    };

    console.log(data);
  };

  const columns: Column<SatffType>[] = [
    {
      title: "รหัสพนักงาน",
      key: "id",
    },
    {
      title: "ชื่อพนักงาน",
      key: "name",
    },
    {
      title: "ตำแหน่ง",
      key: "role",
    },
    {
      title: "จัดการ",
      key: "action",
      render: (_, record) => {
        return (
          <div className="flex justify-start gap-2 group-hover:opacity-100 transition-opacity ">
            <button
              // onClick={() => handleOpenModal(p)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
            >
              <Edit3 size={18} />
            </button>
            <button
              // onClick={() => handleDelete(p.id)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
            >
              <Trash2 size={18} />
            </button>
          </div>
        );
      },
    },
  ];

  const dataSource: SatffType[] = [
    {
      id: "11234",
      name: "Mike",
      role: "32",
    },
  ];

  const onSearch = (text: string) => {
    setSearchTerm(text);
  };
  console.log("searchTerm", searchTerm);

  return (
    <>
      <div className="flex-1 bg-slate-50 overflow-y-auto p-8">
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black text-slate-800">
                จัดการพนักงาน
              </h2>
              <p className="text-slate-500 font-medium">
                จัดการพนักงานในระบบของคุณ
              </p>
            </div>
            <button
              onClick={() => setopen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all"
            >
              <UserPlus size={20} /> เพิ่มพนักงาน
            </button>
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

        <Modal
          open={open}
          onClose={() => setopen(false)}
          title="เพิ่มพนักงาน"
          formId="product-form"
        >
          <form
            id="product-form"
            onSubmit={handleSubmit}
            className="p-6 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block tracking-widest">
                  ชื่อ
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder=""
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-700"
                />
              </div>
              <div className="col-span-1">
                <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block tracking-widest">
                  ตำแหน่ง
                </label>
                <select
                  name="role"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-700 appearance-none cursor-pointer"
                >
                  {categories.map((v, index) => (
                    <option key={index} value={v.value}>
                      {v?.title ?? "-"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Staff;
