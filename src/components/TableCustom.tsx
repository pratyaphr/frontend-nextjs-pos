"use client";

import { Trash2, Edit3 } from "lucide-react";

import { Column } from "@/types";

interface TableCustomProps<T> {
  columns: Column<T>[];
  dataSource: T[];
}

const TableCustom = <T,>({ columns, dataSource }: TableCustomProps<T>) => {
  return (
    <>
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                {columns.map((col) => {
                  return (
                    <th
                      key={col.key}
                      className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest"
                    >
                      {col?.title ?? ""}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {dataSource.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  {columns.map((col) => {
                    const value = row[col.key as keyof typeof row];

                    return (
                      <td key={col.key} className="px-6 py-4">
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {col.render
                            ? col.render(value as T[keyof T], row)
                            : (value as React.ReactNode)}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest"></div>
      </div>
    </>
  );
};

export default TableCustom;
