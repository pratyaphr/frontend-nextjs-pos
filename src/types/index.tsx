export type ProductType = {
  code: string;
  name: string;
  category: string;
  price: number;
  StockQuantity: number;
};

export type Column<T> = {
  title: string;
  key: string;
  render?: (value: any, record: T) => React.ReactNode;
};

export type SatffType = {
  id: string;
  name: string;
  role: string;
};
