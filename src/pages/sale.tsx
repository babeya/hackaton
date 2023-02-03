import React, { useState } from "react";
import { HeadFC, PageProps } from "gatsby";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import GavelIcon from "@mui/icons-material/Gavel";
import Box from "@mui/material/Box";

import Layout from "../components/layout";
import BidDialog from "../components/BidDialog";
import { PROFILE_CONFIGS, SALES } from "../components/constants";
import BidTable from "../components/BidTable";
import { PageContext } from "../components/constants";

const SalePage: React.FC<PageProps> = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const {
    state: { profile },
  } = React.useContext(PageContext);
  const { buyStatusKey } = PROFILE_CONFIGS[profile];

  let currentSale = null;

  if (typeof document !== "undefined") {
    const params = new URL(document.location).searchParams;
    const sale = params.get("sale");

    currentSale = SALES.find(({ id }) => id === sale);
  }

  return (
    <Layout>
      <Card
        sx={{
          display: "flex",
          padding: "32px",
        }}
      >
        <Box
          sx={{
            width: "40%",
          }}
        >
          <CardHeader
            sx={{ fontSize: "62px" }}
            title={currentSale?.model || "Nouveau lot"}
          ></CardHeader>
          <CardMedia>
            <img
              src={
                currentSale?.image ||
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              }
              alt=""
              style={{
                height: "250px",
                width: "250px",
              }}
            />
          </CardMedia>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "60%",
            alignContent: "start",
            position: "relative",
          }}
        >
          <div>
            <Typography>Nombre d'unité : {currentSale?.unit}</Typography>
            <Typography>
              Prix unitaire : {currentSale?.baseUnitPrice / 100}€
            </Typography>
            <Typography>
              Prix total :{" "}
              {(currentSale?.baseUnitPrice * currentSale?.unit) / 100}€
            </Typography>
          </div>
        </Box>
      </Card>
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
