import React from "react";
import { HeadFC, PageProps } from "gatsby";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent'; 
import Box from '@mui/material/Box';


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
    <Layout >
      <Card 
        sx={{ 
          display: 'flex',
          padding: "32px"
          }}>
        <Box 
          sx={{ 
            width: '40%'
          }}>
          <CardHeader title={currentSale?.model || "Nouveau lot"}>
          {/* <Typography component="h1" variant="h3">
            {currentSale?.model || "Nouveau lot"}
          </Typography> */}
          </CardHeader>
            <CardMedia>
              <img 
                src= {currentSale?.image || "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" }
                alt="" 
                style={{
                  height: "250px",
                  width: "250px"
                }}
                />
            </CardMedia>
        </Box>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            width: '60%', 
            alignContent: "start", 
            position: "relative"
          }}>
          <div>
          <Typography>Nombre d'unité : {currentSale?.unit}</Typography>
          <Typography>
            Prix unitaire : {currentSale?.baseUnitPrice / 100}€
          </Typography>
          <Typography>
            Prix total : {(currentSale?.baseUnitPrice * currentSale?.unit) / 100}€
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              width: '50%',
              position: "absolute",
              bottom: "0",
              right:"0",
            }}
          >Enchérir</Button>
          </div>
        </Box>
      </Card>
    </Layout>
  );
};

export default SalePage;

export const Head: HeadFC = () => <title>Vente 1</title>;
