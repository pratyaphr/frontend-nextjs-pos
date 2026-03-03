import { Search } from "lucide-react";

interface SearchContentProps {
  searchTerm: string;
  onSearch: (e: string) => void;
}
export const SearchContent = ({ searchTerm, onSearch }: SearchContentProps) => {
  return (
    <>
      <div className="p-4 bg-white border-b border-gray-300/40 flex gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="ค้นหาสินค้า"
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value as string)}
          />
        </div>
      </div>
    </>
  );
};
