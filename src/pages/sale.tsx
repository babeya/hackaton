import React from "react";
import { HeadFC, PageProps } from "gatsby";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Layout from "../components/layout";
import { SALES } from "../components/constants";

const SalePage: React.FC<PageProps> = () => {
  let currentSale = null;

  if (typeof document !== "undefined") {
    const params = new URL(document.location).searchParams;
    const sale = params.get("sale");

    currentSale = SALES.find(({ id }) => id === sale);
  }

  return (
    <Layout>
      <Paper>
        <Typography component="h1" variant="h3">
          {currentSale?.model || "Nouveau lot"}
        </Typography>

        <Typography>Nombre d'unité : {currentSale?.unit}</Typography>
        <Typography>
          Prix unitaire : {currentSale?.baseUnitPrice / 100}€
        </Typography>
        <Typography>
          Prix total : {(currentSale?.baseUnitPrice * currentSale?.unit) / 100}€
        </Typography>
        <Button>Enchérir</Button>
      </Paper>
    </Layout>
  );
};

export default SalePage;

export const Head: HeadFC = () => <title>Vente 1</title>;
