import React, { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { PageContext, PERSIST_STATE } from "./constants";
import CustomAppBar from "./navbar";

import { green, orange, purple } from "@mui/material/colors";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [state, setState] = useState(PERSIST_STATE.ref);

  const theme = createTheme({
    palette: {
      primary:
        (state.profile === "company" && purple) ||
        (state.profile === "recycling" && orange) ||
        green,
    },
  });

  return (
    <PageContext.Provider
      value={{
        state,
        setState: (newState: any) => {
          PERSIST_STATE.ref = newState;
          setState(newState);
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomAppBar />

        <Container maxWidth="md">
          <Box padding={2}>{children}</Box>
        </Container>
      </ThemeProvider>
    </PageContext.Provider>
  );
};

export default Layout;
