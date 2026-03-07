"use client";

import { ProductType } from "@/types";

const ProductCard: React.FC<{
  product: ProductType;
  onAdd: (p: ProductType) => void;
}> = ({ product, onAdd }) => (
  <div
    onClick={() => onAdd(product)}
    className={`aspect-square p-4 rounded-2xl flex flex-col justify-between cursor-pointer active:scale-95 transition-transform border border-gray-100 shadow-sm  bg-stone-100 `}
  >
    <span className="text-xs font-semibold text-gray-500">
      {product?.category ?? "Category"}
    </span>
    <div>
      <h3 className="font-bold text-gray-800 leading-tight">
        {product?.name ?? "Name"}
      </h3>
      <p className="text-blue-600 font-bold mt-1">
        ฿ {product?.price ?? "Price"}
      </p>
    </div>
  </div>
);

export default ProductCard;
