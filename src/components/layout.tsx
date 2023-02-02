import React, { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { PageContext, PERSIST_STATE } from "./constants";
import CustomAppBar from "./navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [state, setState] = useState(PERSIST_STATE.ref);

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
      <CssBaseline />
      <CustomAppBar />

      <Container maxWidth="md">
        <Box padding={2}>{children}</Box>
      </Container>
    </PageContext.Provider>
  );
};

export default Layout;
