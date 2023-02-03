export type ProfileType = "company" | "recycling" | "refurbishing";

export type StatusKey = "refurb" | "refurbed" | "recycle";

export type ModelKey =
  | "dell12"
  | "dell15"
  | "hp10"
  | "hp11"
  | "imac27"
  | "imacA1311"
  | "mac13"
  | "mac14";

export type Model = {
  label: string;
  description: string;
  year: number;
  weight: string;
  image: string;
};

export type ProfileConfig = {
  label: string;
  buyStatusKey: StatusKey[];
  sellStatusKey: StatusKey[];
};

export type Sale = {
  id: string;
  model: ModelKey;
  unit: number;
  baseUnitPrice: number;
  status: StatusKey;
  bids: { bider: string; unitPrice: number; date: string; status: string }[];
  seller: ProfileType;
};
