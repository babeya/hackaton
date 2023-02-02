import React, { Children } from "react";

import CssBaseline from "@mui/material/CssBaseline";

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
      {children}
    </div>
  );
};

export default Layout;
