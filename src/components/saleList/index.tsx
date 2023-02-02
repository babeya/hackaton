import React from "react";

import { Link } from "gatsby";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { SALES } from "../constants";

import SaleListFilters from "./SaleListFilters";

const SaleList = ({}) => {
  return (
    <React.Fragment>
      <SaleListFilters />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Modèle</TableCell>
              <TableCell align="right">Nombre d'unité</TableCell>
              <TableCell align="right">Prix unitaire</TableCell>
              <TableCell align="right">Prix du lot</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SALES.map(({ id, model, unit, baseUnitPrice, status }) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`/sale?sale=${id}`}>{model}</Link>
                </TableCell>
                <TableCell align="right">{unit}</TableCell>
                <TableCell align="right">{baseUnitPrice / 100}€</TableCell>
                <TableCell align="right">
                  {(baseUnitPrice * unit) / 100}€
                </TableCell>
                <TableCell align="right">{status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default SaleList;
