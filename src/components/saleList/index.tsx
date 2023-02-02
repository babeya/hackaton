import React from "react";

import { Link } from "gatsby";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Sale } from "../types";

const SALES: Sale[] = [
  {
    id: "1",
    model: "Mac 2008",
    unit: 1500,
    baseUnitPrice: 15,
    status: "A recyclé",
    bids: [],
  },
  {
    id: "2",
    model: "PC Dell 2015",
    unit: 300,
    baseUnitPrice: 25000,
    status: "A reconditioné",
    bids: [],
  },
  {
    id: "3",
    model: "1T Ordinateurs cassés",
    unit: 1,
    baseUnitPrice: 12500,
    status: "A recyclé",
    bids: [],
  },
  {
    id: "4",
    model: "PC Thoshiba 2012",
    unit: 300,
    baseUnitPrice: 125,
    status: "A reconditioné",
    bids: [],
  },
  {
    id: "5",
    model: "PC Dell 2015",
    unit: 500,
    baseUnitPrice: 20000,
    status: "A reconditioné",
    bids: [],
  },
  {
    id: "6",
    model: "PC Dell 2005",
    unit: 10000,
    baseUnitPrice: 25,
    status: "A recyclé",
    bids: [],
  },
  {
    id: "6",
    model: "PC Dell Reconditionné",
    unit: 200,
    baseUnitPrice: 200,
    status: "Reconditioné",
    bids: [],
  },
];

const SaleList = ({}) => {
  return (
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
                <Link to="/sale">{model}</Link>
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
  );
};

export default SaleList;
