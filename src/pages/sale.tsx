import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
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
      <div>
        {currentSale?.model}
        <div></div>
      </div>
    </Layout>
  );
};

export default SalePage;

export const Head: HeadFC = () => <title>Vente 1</title>;
