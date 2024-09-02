export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Seller = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  seller: string;
  amount: number;
  date: string;
  status: 'pending' | 'fulfilled';
};

export type Income = {
  month: string;
  income: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  seller_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'fulfilled';
};

export type SellersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_fulfilled: number;
};

export type FormattedSellersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_fulfilled: string;
};

export type SellerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  seller_id: string;
  amount: number;
  status: 'pending' | 'fulfilled';
};
