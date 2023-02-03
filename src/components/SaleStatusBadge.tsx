import React from "react";

import Chip from "@mui/material/Chip";

import { StatusKey } from "./types";

import { SALE_STATUS_CONFIG } from "./constants";

type Props = {
  status: StatusKey;
};

const SaleStatusBadge = ({ status }: Props) => {
  const { label, color } = SALE_STATUS_CONFIG[status];

  return <Chip label={label} color={color} />;
};

export default SaleStatusBadge;
