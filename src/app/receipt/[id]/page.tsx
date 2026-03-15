"use client";

import { ArrowLeft, Printer, SkipBack } from "lucide-react";
import { useRouter } from "next/navigation";

type Item = {
  name: string;
  qty: number;
  price: number;
};

interface ReceiptProps {
  Shopname?: string;
  address?: string;
  tel?: string;
  date?: string;
}

const Receipt = ({
  Shopname = "มาวินการเกษตร",
  address = "13 หมู่10 ต.ผักแว่น อ.จังหาร จ.ร้อยเอ็ด 45000",
  tel = "084-7598675",
  date = new Date().toLocaleDateString("th-TH"),
}: ReceiptProps) => {
  const router = useRouter();

  const items: Item[] = [
    {
      qty: 1,
      name: "item 1",
      price: 100,
    },
    {
      qty: 1,
      name: "item 2",
      price: 100,
    },
  ];

  const minRows = 7;
  const rows: (Item | null)[] = [...items];

  while (rows.length < minRows) {
    rows.push(null);
  }
  return (
    <div>
      <div className="flex-1 bg-slate-50/50 overflow-y-auto p-8">
        <div className="w-full mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex justify-between items-start ">
              <ArrowLeft
                size={30}
                className="mr-2 mt-1 cursor-pointer hover:text-gray-500"
                onClick={() => router.back()}
              />
              <div>
                <h2 className="text-3xl font-black text-slate-800">
                  รายละเอียดการขาย
                </h2>
                <p className="text-slate-400 font-medium italic">
                  ตรวจสอบความถูกต้องของบิลก่อนทำการพิมพ์
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 cursor-pointer text-white rounded-xl font-black shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
                <Printer size={20} /> พิมพ์ใบเสร็จ
              </button>
            </div>
          </div>

          <div className="mb-12">
            <div className="w-[210mm] min-h-[50mm] mx-auto bg-white p-10 text-sm text-gray-800">
              <div className="flex justify-between">
                <div className="w-1/2 break-words">
                  <h2 className="font-bold text-lg">ร้านค้าผู้ให้บริการ</h2>
                  <p>{Shopname}</p>
                  <p>{address}</p>
                  <p>โทร. {tel}</p>
                </div>

                <div className="w-1/2 break-words text-right">
                  <div className="font-bold">
                    บิลเต็มรูปแบบ (Receipt)
                    {/* <span className="ml-2 bg-black text-white px-2 py-1 text-xs">
              #114
            </span> */}
                  </div>

                  <p className="mt-4 font-bold">รายละเอียด</p>
                  <p>วันที่เปิดบิล {date}</p>
                </div>
              </div>
              <table className="w-full mt-8 border-t border-b">
                <thead>
                  <tr className="text-left">
                    <th className="py-2 w-20">จำนวน</th>
                    <th>รายการสินค้า</th>
                    <th className="text-right w-40">ราคา</th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((item, i) => (
                    <tr key={i}>
                      <td className="p-3">{item?.qty ?? ""}</td>

                      <td>{item?.name ?? ""}</td>

                      <td className="text-right">
                        {item ? (item.price * item.qty).toLocaleString() : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="w-full flex justify-between mt-3">
                <span className="font-bold">รวมราคาสุทธิ</span>
                <span>490.00 บาท</span>
              </div>
              <div className="flex justify-between mt-5">
                <div className="w-full">
                  <p className="font-bold">หมายเหตุ</p>
                  <div className="bg-gray-100 h-24 mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
