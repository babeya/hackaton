import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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
      <Button variant="text">Vendre</Button>
      <Button
        variant={currentList === "buy" ? "contained" : "text"}
        onClick={() => {
          setState({ ...state, currentList: "buy" });
        }}
      >
        Enchères en cours
      </Button>
      <Button
        variant={currentList === "sale" ? "contained" : "text"}
        onClick={() => {
          setState({ ...state, currentList: "sale" });
        }}
      >
        Mes ventes
      </Button>
      <Button
        variant={currentList === "bid" ? "contained" : "text"}
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
