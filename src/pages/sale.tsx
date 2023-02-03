import React, { useState, useContext, Fragment } from "react";
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
import {
  MODELS,
  PROFILE_CONFIGS,
  PageContext,
  getBestBid,
} from "../components/constants";
import BidTable from "../components/BidTable";
import SaleStatusBadge from "../components/SaleStatusBadge";
import ProfileLabel from "../components/ProfileLabel";

const PageComponent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const {
    state: { profile, sales },
  } = useContext(PageContext);
  const { buyStatusKey } = PROFILE_CONFIGS[profile];

  let currentSale = null;
  let currentModel = null;

  if (typeof document !== "undefined") {
    const params = new URL(document.location).searchParams;
    const sale = params.get("sale");

    currentSale = sales.find(({ id }) => id === sale);
    currentModel = currentSale?.model ? MODELS[currentSale?.model] : null;
  }

  const bestBid = getBestBid(currentSale?.bids || []) || null;

  return (
    <Fragment>
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
            <Stack
              direction="row"
              justifyContent="space-between"
              marginY={2}
              alignItems="center"
            >
              <Typography>
                Vendeur :{" "}
                <b>
                  <ProfileLabel
                    currentProfile={profile}
                    profile={currentSale?.seller || "company"}
                  />
                </b>
              </Typography>
              {currentSale ? (
                <SaleStatusBadge status={currentSale.status} />
              ) : null}
            </Stack>

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

            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
            >
              <Typography variant="overline">Nombre de pièces</Typography>
              <Typography>{currentSale?.unit}</Typography>
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
            >
              <Typography variant="overline">
                Prix unitaire (meilleur offre)
              </Typography>

              <Typography>
                {bestBid ? `${bestBid.unitPrice / 100}€` : "Aucune offre"}
              </Typography>
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
            >
              <Typography variant="overline">Prix du lot</Typography>

              <Typography>
                {bestBid
                  ? `${(bestBid.unitPrice * (currentSale?.unit || 1)) / 100}€`
                  : "Aucune offre"}
              </Typography>
            </Stack>
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
    </Fragment>
  );
};

const SalePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PageComponent />
    </Layout>
  );
};

export default SalePage;

export const Head: HeadFC = () => <title>Vente 1</title>;
