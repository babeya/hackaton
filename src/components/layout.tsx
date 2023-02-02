import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CustomAppBar from "./navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <CssBaseline />
      <CustomAppBar />

      <Container maxWidth="md">
        <Box padding={2}>{children}</Box>
      </Container>
    </div>
  );
};

export default Layout;
