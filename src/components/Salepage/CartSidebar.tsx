"use client";

import { ShoppingCart, Plus, Minus, Trash2, SquarePlus, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ProductType } from "@/types";

interface Cart extends ProductType {
  qty: number;
}

interface CartSidebarPtops {
  cart: Cart[];
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  DeleteItemCart: (id: string) => void;
  addToCart: (item: ProductType) => void;
  changeQty: (id: string, qty: number) => void;
}

export const CartSidebar = ({
  cart,
  updateQty,
  clearCart,
  DeleteItemCart,
  addToCart,
  changeQty,
}: CartSidebarPtops) => {
  const [showAddPrice, setShowAddPrice] = useState<boolean>(false);
  const [item, setItem] = useState({
    code: "Unknown",
    name: "Unknown",
    price: 1,
    StockQuantity: 0,
    category: "unknown",
  });
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.qty,
      0,
    );
    setTotal(totalPrice);
  }, [cart]);

  function generateEAN13() {
    const countryCode = "885";

    const randomDigits = Math.floor(
      100000000 + Math.random() * 900000000,
    ).toString();

    const base = countryCode + randomDigits.slice(0, 9);

    const digits = base.split("").map(Number);

    const sum = digits.reduce((acc, num, index) => {
      return acc + num * (index % 2 === 0 ? 1 : 3);
    }, 0);

    const checkDigit = (10 - (sum % 10)) % 10;

    const code = base + checkDigit;

    return code;
  }
  console.log("item", item);

  return (
    <>
      <div className="w-96 bg-white border-l border-gray-300/40 shadow-2xl flex flex-col">
        <div className="p-4 border-b border-gray-300/40 flex justify-between items-center bg-white sticky top-0 z-10">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <ShoppingCart size={20} /> รายการ ({cart.length})
          </h2>
          <div className="flex flex-row items-center justify-center">
            <button
              onClick={() => {
                clearCart();
                setTotal(0);
              }}
              className="text-red-500 p-2 hover:bg-red-50 rounded-lg cursor-pointer"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-50">
              <ShoppingCart size={64} />
              <p className="mt-4 font-medium">ยังไม่มีรายการสินค้า</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.code}
                className="flex justify-between items-center bg-white p-1"
              >
                <div className="flex-1">
                  <p className="font-bold text-slate-800 line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    ฿{item.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.code, -1)}
                    className="p-1 rounded-lg bg-gray-100 active:bg-gray-200 cursor-pointer"
                  >
                    <Minus size={18} />
                  </button>
                  <input
                    value={item.qty}
                    onChange={(e) =>
                      changeQty(item.code, Number(e.target.value))
                    }
                    className="font-bold w-8 text-center"
                  ></input>
                  <button
                    onClick={() => updateQty(item.code, 1)}
                    className="p-1 rounded-lg bg-gray-100 active:bg-gray-200 cursor-pointer"
                  >
                    <Plus size={18} />
                  </button>
                  <button
                    onClick={() => DeleteItemCart(item.code)}
                    className="ml-1 text-gray-300 hover:text-red-500 cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className=" p-6 border-t border-gray-300/40 bg-gray-50 space-y-3 ">
          <div
            className={`overflow-hidden transition-all duration-300 ${showAddPrice ? "max-h-80 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}`}
          >
            <div className="flex justify-between cursor-pointer">
              <h2 className="font-bold text-lg flex items-center mb-2">
                เพิ่มรายการ (สินค้าที่ไม่มีในระบบ)
              </h2>
              <X
                className="hover:bg-red-50 hover:text-red-500"
                size={20}
                onClick={() => setShowAddPrice(false)}
              />
            </div>

            <div>
              <div>
                <label className="text-[12px] font-black text-slate-700 uppercase mb-1 ml-1 block tracking-widest">
                  ชื่อสินค้า :
                </label>
                <input
                  type="text"
                  value={item?.name ?? ""}
                  className="w-full pl-3 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setItem({
                      ...item,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mt-2">
                <label className="text-[12px] font-black text-slate-700 uppercase mb-1 ml-1 block tracking-widest">
                  ราคา :
                </label>
                <div className="relative ">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    ฿
                  </span>
                  <input
                    type="number"
                    min={1}
                    value={item?.price ?? 1}
                    placeholder="เพิ่มราคา"
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      setItem({
                        ...item,
                        price: Number(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <button
              className="w-84 bg-blue-500 text-white mt-2 pl-5 pr-5 py-2.5  border border-slate-100 rounded-xl focus:outline-none appearance-none font-bold text-slate-600 cursor-pointer hover:bg-blue-600 hover:text-white active:scale-95 transition-all "
              onClick={() => addToCart({ ...item, code: generateEAN13() })}
            >
              ตกลง
            </button>
          </div>
          <div className="flex justify-between text-2xl font-black text-slate-900 pt-3 ">
            <span>ยอดสุทธิ</span>
            <div className="flex justify-end items-center">
              <span className="text-blue-600">฿ {total.toLocaleString()}</span>

              <button
                onClick={() => setShowAddPrice(!showAddPrice)}
                className="text-gray-500 p-2 ml-2 hover:bg-red-50 hover:text-blue-500 rounded-lg cursor-pointer"
              >
                <SquarePlus size={20} />
              </button>
            </div>
          </div>
          <button className="w-full cursor-pointer py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl shadow-lg active:scale-95 disabled:opacity-50 disabled:active:scale-100 transition-all mt-4">
            ชำระเงิน
          </button>
        </div>
      </div>
    </>
  );
};
