export type ProfileType = "company" | "recycling" | "refurbishing";

export type StatusKey = "refurb" | "refurbed" | "recycle";

export type ProfileConfig = {
  label: string;
  buyStatusKey: StatusKey[];
  sellStatusKey: StatusKey[];
};

export type Sale = {
  id: string;
  model: string;
  unit: number;
  baseUnitPrice: number;
  status: StatusKey;
  bids: { bider: string; unitPrice: number; date: string; status: string }[];
  seller: ProfileType;
};
