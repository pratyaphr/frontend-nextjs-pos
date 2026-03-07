"use client";

import {
  TrendingUp,
  ReceiptText,
  Boxes,
  AlertCircle,
  Trophy,
} from "lucide-react";

import { SalesGraph, SummaryCard } from "@/components/Dashbord";

export default function Dashboard() {
  return (
    <>
      <div className="bg-orange-100 flex-1 bg-slate-50 overflow-y-auto p-8">
        <div>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-black text-slate-800">
                แดชบอร์ดสรุปผล
              </h2>
              <p className="text-slate-500">
                ข้อมูลอัปเดตล่าสุด: วันนี้ 12:45 น.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SummaryCard
              title="ยอดขายวันนี้"
              value={10000}
              logo={<TrendingUp size={24} />}
              type={"sale"}
              unit="บาท"
            />

            <SummaryCard
              title="จำนวนบิล"
              value={100}
              logo={<ReceiptText size={24} />}
              unit="บิล"
              type={"bill"}
            />

            <SummaryCard
              title="จำนวนสินค้าในคลัง"
              value={100}
              logo={<Boxes size={24} />}
              unit="ชิ้น"
              type={"inStock"}
            />

            <SummaryCard
              title="สินค้าที่ใกล้หมด"
              value={100}
              logo={<AlertCircle size={24} />}
              unit="รายการ"
              type={"outOfStock"}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SalesGraph />

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <Trophy size={20} className="text-yellow-500" /> สินค้าขายดี
                </h4>
                <button className="text-blue-600 text-[11px] font-bold uppercase tracking-tight hover:underline">
                  Ranking
                </button>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                {[
                  {
                    name: "กาแฟอเมริกาโน่",
                    sales: "840 บิล",
                    price: "฿54,600",
                    rank: 1,
                    color: "bg-yellow-100 text-yellow-700",
                  },
                  {
                    name: "ชาเขียวมัทฉะ",
                    sales: "620 บิล",
                    price: "฿46,500",
                    rank: 2,
                    color: "bg-slate-100 text-slate-600",
                  },
                  {
                    name: "ครัวซองต์เนยสด",
                    sales: "510 บิล",
                    price: "฿43,350",
                    rank: 3,
                    color: "bg-orange-100 text-orange-700",
                  },
                  {
                    name: "เค้กช็อกโกแลต",
                    sales: "240 บิล",
                    price: "฿28,800",
                    rank: 4,
                    color: "bg-slate-50 text-slate-400",
                  },
                  {
                    name: "น้ำเปล่าสะอาด",
                    sales: "190 บิล",
                    price: "฿2,850",
                    rank: 5,
                    color: "bg-slate-50 text-slate-400",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-2xl transition-colors cursor-default"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${item.color}`}
                    >
                      {item.rank}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-slate-700 line-clamp-1">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                        {item.sales}
                      </div>
                    </div>
                    <div className="text-right text-xs font-black text-slate-900">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
