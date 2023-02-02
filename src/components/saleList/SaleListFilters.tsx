import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { PERSIST_STATE } from "../constants";

const SaleListFilters = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      marginY={2}
    >
      <Button variant="text">Vendre</Button>
      <Button variant="contained">Enchères en cours</Button>
      <Button variant="text">Mes ventes</Button>
      <Button variant="text">Mes enchères</Button>
    </Stack>
  );
};

export default SaleListFilters;
