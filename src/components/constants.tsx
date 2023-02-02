import React from "react";
import { Sale, ProfileType, ProfileConfig } from "./types";

const COMPANY_PROFILE_CONFIG: ProfileConfig = {
  label: "Entreprise",
  buyStatusKey: ["refurbed"],
  sellStatusKey: ["refurb", "recycle"],
};

const RECYCLING_PROFILE_CONFIG: ProfileConfig = {
  label: "Recycleur",
  buyStatusKey: ["recycle"],
  sellStatusKey: [],
};

const REFURBISHING_PROFILE_CONFIG: ProfileConfig = {
  label: "Reconditioneur",
  buyStatusKey: ["refurb"],
  sellStatusKey: ["refurbed"],
};

/*

{
  key: "refurbishing",
  buyStatusKey: ["A reconditioné"],
  sellStatusKey: ["A recyclé", "Reconditioné"],
  label: "Reconditioneur",
}*/

export const PROFILE_CONFIGS = {
  company: COMPANY_PROFILE_CONFIG,
  recycling: RECYCLING_PROFILE_CONFIG,
  refurbishing: REFURBISHING_PROFILE_CONFIG,
};

export const SALES: Sale[] = [
  {
    id: "1",
    model: "Mac 2008",
    unit: 1500,
    baseUnitPrice: 15,
    status: "recycle",
    bids: [],
    seller: "company",
  },
  {
    id: "2",
    model: "PC Dell 2015",
    unit: 300,
    baseUnitPrice: 25000,
    status: "refurb",
    bids: [],
    seller: "company",
  },
  {
    id: "3",
    model: "1T Ordinateurs cassés",
    unit: 1,
    baseUnitPrice: 12500,
    status: "recycle",
    bids: [],
    seller: "refurbishing",
  },
  {
    id: "4",
    model: "PC Thoshiba 2012",
    unit: 300,
    baseUnitPrice: 125,
    status: "refurb",
    bids: [],
    seller: "company",
  },
  {
    id: "5",
    model: "PC Dell 2015",
    unit: 500,
    baseUnitPrice: 20000,
    status: "refurb",
    bids: [],
    seller: "company",
  },
  {
    id: "6",
    model: "PC Dell 2005",
    unit: 10000,
    baseUnitPrice: 25,
    status: "recycle",
    bids: [],
    seller: "company",
  },
  {
    id: "6",
    model: "PC Dell Reconditionné",
    unit: 200,
    baseUnitPrice: 200,
    status: "refurbed",
    bids: [],
    seller: "refurbishing",
  },
];

export const PERSIST_STATE: {
  ref: {
    profile: ProfileType;
    sales: Sale[];
  };
} = {
  ref: {
    profile: "company",
    sales: SALES,
  },
};

export const PageContext = React.createContext({
  state: PERSIST_STATE.ref,
  setState: () => {},
});
