import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Sale } from "./types";

type Props = {
  sale: Sale;
};

const BidTable = ({ sale: { bids, unit } }: Props) => {
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Acheteur</TableCell>
              <TableCell align="right">Prix unitaire</TableCell>
              <TableCell align="right">Prix du lot</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bids.map(({ bider, unitPrice, date, status }, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {bider}
                </TableCell>
                <TableCell align="right">{unitPrice / 100}€</TableCell>
                <TableCell align="right">{(unitPrice * unit) / 100}€</TableCell>
                <TableCell align="right">{date}</TableCell>
                <TableCell align="right">{status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default BidTable;
