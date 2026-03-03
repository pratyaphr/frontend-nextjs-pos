"use client";
import { useState } from "react";

import { SearchContent, CartSidebar } from "@/components/Salepage";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

interface CartItem extends Product {
  qty: number;
}

const SalePage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const PRODUCTS: Product[] = [
    {
      id: 1,
      name: "กาแฟอเมริกาโน่",
      price: 65,
      category: "เครื่องดื่ม",
    },
    {
      id: 2,
      name: "ชาเขียวมัทฉะ",
      price: 75,
      category: "เครื่องดื่ม",
    },
    {
      id: 3,
      name: "ครัวซองต์เนยสด",
      price: 85,
      category: "เบเกอรี่",
    },
    {
      id: 4,
      name: "เค้กช็อกโกแลต",
      price: 120,
      category: "เบเกอรี่",
    },
    {
      id: 5,
      name: "น้ำเปล่า",
      price: 15,
      category: "เครื่องดื่ม",
    },
    {
      id: 6,
      name: "คุ้กกี้โอ๊ตมีล",
      price: 45,
      category: "ขนมขบเคี้ยว",
    },
  ];

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: number, amount: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.qty + amount);
          return { ...item, qty: newQty };
        }
        return item;
      }),
    );
  };

  const DeleteItemCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
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
              <ProductCard key={p.id} product={p} onAdd={addToCart} />
            ))}
          </div>
        </div>

        <CartSidebar
          cart={cart}
          updateQty={updateQty}
          DeleteItemCart={DeleteItemCart}
          clearCart={clearCart}
        />
      </div>
    </>
  );
};

export default SalePage;
