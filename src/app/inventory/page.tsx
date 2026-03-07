"use client";

import React, { useState } from "react";
import { Search, Trash2, Edit3, Filter, PackagePlus } from "lucide-react";

import Modal from "@/components/Modal";
import TableCustom from "@/components/TableCustom";
import { Column, ProductType } from "@/types";

const Inventory = () => {
  const [open, setopen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      code: formData.get("code"),
      name: formData.get("name"),
      category: formData.get("category"),
      price: formData.get("price"),
      StockQuantity: formData.get("StockQuantity"),
    };

    console.log(data);
  };

  const columns: Column<ProductType>[] = [
    {
      title: "รหัสสินค้า",
      key: "code",
    },
    {
      title: "ชื่อสินค้า",
      key: "name",
    },
    {
      title: "หมวดหมู่",
      key: "category",
    },
    {
      title: "ราคา",
      key: "price",
    },
    {
      title: "สต็อก",
      key: "StockQuantity",
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

  const dataSource: ProductType[] = [
    {
      code: "11234",
      name: "Mike",
      category: "32",
      price: 500,
      StockQuantity: 500,
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
                จัดการสินค้า
              </h2>
              <p className="text-slate-500 font-medium">
                จัดการสต็อกและรายการสินค้าในระบบของคุณ
              </p>
            </div>
            <button
              onClick={() => setopen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all"
            >
              <PackagePlus size={20} /> เพิ่มสินค้าใหม่
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
                <Filter
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <select
                  className="pl-10 pr-8 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none appearance-none font-bold text-slate-600 cursor-pointer"
                  // value={categoryFilter}
                  // onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  {/* {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))} */}
                </select>
              </div>
            </div>
          </div>

          <TableCustom columns={columns} dataSource={dataSource} />
        </div>

        <Modal
          open={open}
          onClose={() => setopen(false)}
          title="เพิ่มสินค้าใหม่"
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
                  รหัสสินค้า
                </label>
                <input
                  name="code"
                  type="text"
                  required
                  // readOnly={!!editingProduct}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-700"
                />
              </div>
              <div className="col-span-1">
                <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block tracking-widest">
                  หมวดหมู่
                </label>
                <select
                  name="category"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-700 appearance-none cursor-pointer"
                >
                  {/* {categories
                  .filter((c) => c !== "ทั้งหมด")
                  .map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))} */}
                </select>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block tracking-widest">
                ชื่อสินค้า
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="เช่น อเมริกาโน่ร้อน..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block tracking-widest">
                  ราคา (บาท)
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  placeholder="0.00"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-700"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block tracking-widest">
                  จำนวนสต็อก
                </label>
                <input
                  type="number"
                  name="StockQuantity"
                  required
                  placeholder="0"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-700"
                />
              </div>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Inventory;
