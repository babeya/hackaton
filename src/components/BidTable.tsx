import React, { useContext } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Sale } from "./types";
import { PROFILE_LABELS, PageContext } from "./constants";
import ProfileLabel from "./ProfileLabel";

type Props = {
  sale: Sale;
};

const BidTable = ({ sale: { bids, unit } }: Props) => {
  const {
    state: { profile },
  } = useContext(PageContext);

  return (
    <React.Fragment>
      <TableContainer>
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
            {bids
              .sort(({ unitPrice: u1 }, { unitPrice: u2 }) => u2 - u1)
              .map(({ bider, unitPrice, date, status }, idx) => (
                <TableRow
                  key={idx}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: !idx ? "beige" : undefined,
                  }}
                >
                  <TableCell component="th" scope="row">
                    {PROFILE_LABELS[bider] ? (
                      <ProfileLabel profile={bider} currentProfile={profile} />
                    ) : (
                      bider
                    )}
                  </TableCell>
                  <TableCell align="right">{unitPrice / 100}€</TableCell>
                  <TableCell align="right">
                    {(unitPrice * unit) / 100}€
                  </TableCell>
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
