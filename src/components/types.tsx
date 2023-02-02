export type Sale = {
  id: string;
  model: string;
  unit: number;
  baseUnitPrice: number;
  status: "A reconditioné" | "A recyclé" | "Reconditioné";
  bids: { bider: string; unitPrice: number; date: string; status: string }[];
  seller: string;
};
