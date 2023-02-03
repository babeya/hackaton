import React, { useState } from "react";
import { HeadFC, PageProps } from "gatsby";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import GavelIcon from "@mui/icons-material/Gavel";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import Layout from "../components/layout";
import BidDialog from "../components/BidDialog";
import { MODELS, PROFILE_CONFIGS, SALES } from "../components/constants";
import BidTable from "../components/BidTable";
import { PageContext } from "../components/constants";

const SalePage: React.FC<PageProps> = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const {
    state: { profile },
  } = React.useContext(PageContext);
  const { buyStatusKey } = PROFILE_CONFIGS[profile];

  let currentSale = null;
  let currentModel = null;

  if (typeof document !== "undefined") {
    const params = new URL(document.location).searchParams;
    const sale = params.get("sale");

    currentSale = SALES.find(({ id }) => id === sale);
    currentModel = currentSale?.model ? MODELS[currentSale?.model] : null;
  }

  return (
    <Layout>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h3" textAlign="center" sx={{ marginBottom: 2 }}>
          {currentModel?.label}
        </Typography>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <img
              style={{
                position: "relative",
                maxWidth: "98%",
                maxHeight: "300px",
              }}
              src={
                currentModel?.image ||
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              {currentModel?.description}
            </Typography>
            <Typography>
              <b>Année : </b>
              {currentModel?.year}
            </Typography>
            <Typography>
              <b>Poids : </b>
              {currentModel?.weight}
            </Typography>

            <Divider sx={{ marginY: 2 }} />

            <Typography>Nombre d'unité : {currentSale?.unit}</Typography>
            <Typography>
              Prix unitaire demandé : {currentSale?.baseUnitPrice / 100}€
            </Typography>
            <Typography>
              Prix total :{" "}
              {(currentSale?.baseUnitPrice * currentSale?.unit) / 100}€
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <div>
        {currentSale ? (
          <Paper sx={{ marginY: 2, padding: 2 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography component="h2" variant="h4">
                Enchères en cours
              </Typography>
              <Button
                startIcon={<GavelIcon />}
                disabled={
                  currentSale.seller === profile ||
                  !buyStatusKey.includes(currentSale.status)
                }
                onClick={() => {
                  setDialogOpen(true);
                }}
                variant="contained"
              >
                Enchérir
              </Button>
            </Stack>

            <BidDialog
              sale={currentSale}
              open={dialogOpen}
              onClose={() => {
                setDialogOpen(false);
              }}
            />
            <BidTable sale={currentSale} />
          </Paper>
        ) : null}
      </div>
    </Layout>
  );
};

export default SalePage;

export const Head: HeadFC = () => <title>Vente 1</title>;
