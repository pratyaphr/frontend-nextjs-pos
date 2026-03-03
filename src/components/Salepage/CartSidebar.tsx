import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";

import { Product } from "@/types";

interface Cart extends Product {
  qty: number;
}

interface CartSidebarPtops {
  cart: Cart[];
  updateQty: (id: number, amount: number) => void;
  clearCart: () => void;
  DeleteItemCart: (id: number) => void;
}

export const CartSidebar = ({
  cart,
  updateQty,
  clearCart,
  DeleteItemCart,
}: CartSidebarPtops) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  return (
    <>
      <div className="w-96 bg-white border-l border-gray-300/40 shadow-2xl flex flex-col">
        <div className="p-4 border-b border-gray-300/40 flex justify-between items-center bg-white sticky top-0 z-10">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <ShoppingCart size={20} /> รายการ ({cart.length})
          </h2>
          <button
            onClick={clearCart}
            className="text-red-500 p-2 hover:bg-red-50 rounded-lg cursor-pointer"
          >
            <Trash2 size={20} />
          </button>
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
                key={item.id}
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
                    onClick={() => updateQty(item.id, -1)}
                    className="p-1 rounded-lg bg-gray-100 active:bg-gray-200 cursor-pointer"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-bold w-6 text-center">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="p-1 rounded-lg bg-gray-100 active:bg-gray-200 cursor-pointer"
                  >
                    <Plus size={18} />
                  </button>
                  <button
                    onClick={() => DeleteItemCart(item.id)}
                    className="ml-1 text-gray-300 hover:text-red-500 cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-gray-300/40 bg-gray-50 space-y-3 ">
          <div className="flex justify-between text-2xl font-black text-slate-900 pt-3 ">
            <span>ยอดสุทธิ</span>
            <span className="text-blue-600">฿ {total.toLocaleString()}</span>
          </div>
          <button className="w-full cursor-pointer py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl shadow-lg active:scale-95 disabled:opacity-50 disabled:active:scale-100 transition-all mt-4">
            ชำระเงิน
          </button>
        </div>
      </div>
    </>
  );
};
