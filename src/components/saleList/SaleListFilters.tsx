import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GavelIcon from "@mui/icons-material/Gavel";

import { PageContext } from "../constants";

const SaleListFilters = () => {
  const { state, setState } = useContext(PageContext);
  const { currentList } = state;

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      marginY={2}
    >
      <Button variant="text" disabled>
        Vendre
      </Button>
      <Button
        startIcon={<ShoppingCartIcon />}
        variant={currentList === "buy" ? "contained" : "text"}
        onClick={() => {
          setState({ ...state, currentList: "buy" });
        }}
      >
        Offres
      </Button>
      <Button
        variant={currentList === "sale" ? "contained" : "text"}
        startIcon={<StorefrontIcon />}
        onClick={() => {
          setState({ ...state, currentList: "sale" });
        }}
      >
        Mes ventes
      </Button>
      <Button
        variant={currentList === "bid" ? "contained" : "text"}
        startIcon={<GavelIcon />}
        onClick={() => {
          setState({ ...state, currentList: "bid" });
        }}
      >
        Mes enchères
      </Button>
    </Stack>
  );
};

export default SaleListFilters;
