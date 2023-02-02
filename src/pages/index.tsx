import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

import Layout from "../components/layout";
import SaleList from "../components/saleList";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SaleList />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
