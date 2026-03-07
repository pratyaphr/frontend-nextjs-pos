"use client";
import { useState } from "react";

import { SearchContent, CartSidebar } from "@/components/Salepage";
import ProductCard from "@/components/Salepage/ProductCard";
import { ProductType } from "@/types";

interface CartItem extends ProductType {
  qty: number;
}

const SalePage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const PRODUCTS: ProductType[] = [
    {
      code: "1",
      name: "กาแฟอเมริกาโน่",
      price: 65,
      category: "เครื่องดื่ม",
      StockQuantity: 5,
    },
    {
      code: "2",
      name: "ชาเขียวมัทฉะ",
      price: 75,
      StockQuantity: 5,
      category: "เครื่องดื่ม",
    },
    {
      code: "3",
      name: "ครัวซองต์เนยสด",
      price: 85,
      StockQuantity: 5,
      category: "เบเกอรี่",
    },
    {
      code: "4",
      name: "เค้กช็อกโกแลต",
      price: 120,
      StockQuantity: 5,
      category: "เบเกอรี่",
    },
    {
      code: "5",
      name: "น้ำเปล่า",
      price: 15,
      StockQuantity: 5,
      category: "เครื่องดื่ม",
    },
    {
      code: "6",
      name: "คุ้กกี้โอ๊ตมีล",
      price: 45,
      StockQuantity: 5,
      category: "ขนมขบเคี้ยว",
    },
  ];

  const addToCart = (product: ProductType) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.code === product.code);
      if (existing) {
        return prev.map((item) =>
          item.code === product.code ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (code: string, qty: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.code === code) {
          const newQty = Math.max(1, item.qty + qty);
          return { ...item, qty: newQty };
        }
        return item;
      }),
    );
  };

  const DeleteItemCart = (code: string) => {
    setCart((prev) => prev.filter((item) => item.code !== code));
  };

  const clearCart = () => setCart([]);

  const onSearch = (text: string) => {
    setSearchTerm(text);
  };
  console.log("searchTerm", searchTerm);

  return (
    <>
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col bg-gray-50">
          <SearchContent searchTerm={searchTerm} onSearch={onSearch} />

          <div className="flex-1 p-6 overflow-y-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 content-start">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.code} product={p} onAdd={addToCart} />
            ))}
          </div>
        </div>

        <CartSidebar
          cart={cart}
          updateQty={updateQty}
          DeleteItemCart={DeleteItemCart}
          clearCart={clearCart}
          addToCart={addToCart}
        />
      </div>
    </>
  );
};

export default SalePage;
