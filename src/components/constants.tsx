import React from "react";
import { Sale, ProfileType, ProfileConfig, Bid } from "./types";

const COMPANY_PROFILE_CONFIG: ProfileConfig = {
  label: "Entreprise",
  buyStatusKey: ["refurbed"],
  icon: "🏢",
  description:
    "En tant qu'entreprise générique, je peux vendre des lots à recycler et à reconditionner, et acheter des lots reconditionnés",
  sellStatusKey: ["refurb", "recycle"],
};

const RECYCLING_PROFILE_CONFIG: ProfileConfig = {
  label: "Recycleur",
  icon: "♻️",
  buyStatusKey: ["recycle"],
  description:
    "En tant que recycleur, je peux enchérir sur des lots à recycler.",
  sellStatusKey: [],
};

const REFURBISHING_PROFILE_CONFIG: ProfileConfig = {
  label: "Reconditionneur",
  icon: "🧰",
  description:
    "En tant que reconditionneur, je peux enchérir sur des lots à reconditionner et vendre des lots à recycler et reconditionnés.",
  buyStatusKey: ["refurb"],
  sellStatusKey: ["refurbed", "recycle"],
};

export const SALE_STATUS_CONFIG = {
  recycle: {
    label: "A recycler",
    color: "secondary",
  },
  refurb: { label: "A reconditionner", color: "success" },
  refurbed: { label: "Reconditionné", color: "warning" },
};

export const getBestBid = (bids: Bid[]) =>
  bids.sort(({ unitPrice: u1 }, { unitPrice: u2 }) => u2 - u1)[0];

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

export const MODELS = {
  dell12: {
    label: "Ordinateur de bureau dell",
    description: "Un ordinateur de la marque dell",
    year: 2012,
    weight: "1kg",
    image: "https://lecoindupro.blob.core.windows.net/upload/2221529.Lg.jpg",
  },
  dell15: {
    label: "Ordinateur portable dell",
    description: "Un ordinateur de la marque dell",
    year: 2015,
    weight: "1kg",
    image: "https://lecoindupro.blob.core.windows.net/upload/2218711.Lg.jpg",
  },
  hp10: {
    label: "Ordinateur de bureau HP",
    description: "Un ordinateur de bureau la marque HP",
    year: 2016,
    weight: "1kg",
    image:
      "https://www.envoi-boutique.org/images/com_hikashop/upload/img-3676.jpg",
  },
  hp11: {
    label: "Ordinateur protabl HP",
    description: "Un ordinateur portable de la marque HP",
    year: 2018,
    weight: "1kg",
    image:
      "https://ag-cdn-production.azureedge.net/produits/images/eda2d72b-fc31-48c7-a2eb-21c07d582adc_original.jpg",
  },
  imac27: {
    label: "Ordinateur de bureau iMac 27",
    description:
      "iMac 27 5K (Fin 2015) Core i5 3.2GHz - SSD 24 Go + HDD 1 To - 8 Go AZERTY - Français",
    year: 2015,
    weight: "5kg",
    image: "https://i.ebayimg.com/images/g/aXsAAOSwtepjG1qM/s-l1600.jpg",
  },
  imacA1311: {
    label: "Ordinateur de bureau iMac (A1311)",
    description:
      "iMac (A1311) Milieu 2011 21.5 i5-2.5GHz 4GB-500GB Modèle: A1311 Date : Milieu 2011 Taille d'écran (Diagonale d'écran) : 21,5",
    year: 2011,
    weight: "5kg",
    image:
      "https://www.cdiscount.com/pdt2/7/0/4/1/1200x1200/app7061254103704/rw/imac-a1311-milieu-2011-21-5-i5-2-5ghz-4gb-500gb.jpg",
  },
  mac13: {
    label: "Ordinateur portable MacBook Air 13",
    description:
      "MacBook Air 13  - AZERTY - Français - Retina - Core i3 - 1.1 GHz - 256 Go SSD - RAM 8Go",
    year: 2020,
    weight: "1kg",
    image:
      "https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/None_5bd2e68c-7aa0-4492-b4e3-60122601fdfe.jpg",
  },
  mac14: {
    label: "Ordinateur portable MacBook Air 14",
    description:
      "MacBook 12  - AZERTY - Français Retina - Core m3 - 1.2 GHz - 256 Go SSD - RAM 8Go",
    year: 2017,
    weight: "1kg",
    image:
      "https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/253280_8f2852a9-7ddf-484d-8da8-e5bc505914c9.jpg",
  },
};

export const PROFILE_LABELS = {
  company: "Alotof Computer",
  recycling: "Recycle Elec",
  refurbishing: "Front Market",
};

export const SALES: Sale[] = [
  {
    id: "1",
    model: "imacA1311",
    unit: 1500,
    baseUnitPrice: 15,
    status: "recycle",
    bids: [
      {
        bider: "recycling",
        unitPrice: 150,
        status: "ouverte",
        date: "01/02/2022",
      },
      {
        bider: "RecyclGratis",
        unitPrice: 30,
        status: "ouverte",
        date: "01/02/2022",
      },
    ],
    seller: "company",
  },
  {
    id: "2",
    model: "dell15",
    unit: 300,
    baseUnitPrice: 25000,
    status: "refurb",
    bids: [
      {
        bider: "refurbishing",
        unitPrice: 25000,
        status: "ouverte",
        date: "01/02/2022",
      },
    ],
    seller: "company",
  },
  {
    id: "4",
    model: "hp11",
    unit: 300,
    baseUnitPrice: 125,
    status: "refurb",
    bids: [],
    seller: "company",
  },
  {
    id: "5",
    model: "hp10",
    unit: 500,
    baseUnitPrice: 20000,
    status: "refurb",
    bids: [],
    seller: "company",
  },
  {
    id: "6",
    model: "mac13",
    unit: 10000,
    baseUnitPrice: 25,
    status: "recycle",
    bids: [],
    seller: "company",
  },
  {
    id: "7",
    model: "mac14",
    unit: 200,
    baseUnitPrice: 200,
    status: "refurbed",
    bids: [],
    seller: "refurbishing",
  },
  {
    id: "8",
    model: "imac27",
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
    currentList: "sale" | "buy" | "bid";
  };
} = {
  ref: {
    profile: "company",
    currentList: "buy",
    sales: SALES,
  },
};

export const PageContext = React.createContext({
  state: PERSIST_STATE.ref,
  setState: () => {},
});
