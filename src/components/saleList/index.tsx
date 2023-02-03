import React, { useContext } from "react";

import { Link } from "gatsby";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import SaleListFilters from "./SaleListFilters";
import useSaleList from "./useSaleList";
import SaleStatusBadge from "../SaleStatusBadge";
import { MODELS, PageContext } from "../constants";
import ProfileLabel from "../ProfileLabel";

const SaleList = ({}) => {
  const list = useSaleList();
  const {
    state: { profile },
  } = useContext(PageContext);

  return (
    <React.Fragment>
      <SaleListFilters />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Modèle</TableCell>
              <TableCell>Vendeur</TableCell>
              <TableCell align="right">Nombre d'unité</TableCell>
              <TableCell align="right">Prix unitaire</TableCell>
              <TableCell align="right">Prix du lot</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(({ id, model, unit, baseUnitPrice, status, seller }) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`/sale?sale=${id}`}>{MODELS[model].label}</Link>
                </TableCell>
                <TableCell>
                  <ProfileLabel currentProfile={profile} profile={seller} />
                </TableCell>
                <TableCell align="right">{unit}</TableCell>
                <TableCell align="right">{baseUnitPrice / 100}€</TableCell>
                <TableCell align="right">
                  {(baseUnitPrice * unit) / 100}€
                </TableCell>
                <TableCell align="right">
                  <SaleStatusBadge status={status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default SaleList;
