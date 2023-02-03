import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { Sale } from "./types";
import { PageContext } from "./constants";

type Props = {
  sale: Sale;
  open: boolean;
  onClose: () => void;
};

const BidDialog = ({ onClose, open, sale }: Props) => {
  const { state, setState } = React.useContext(PageContext);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Dialog onClose={onClose} open={open} sx={{ padding: 2 }}>
      <DialogTitle>Enchérir</DialogTitle>
      <TextField
        label="Prix (en centimes)"
        id="outlined-start-adornment"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
      />
      <Button
        onClick={() => {
          sale.bids.push({
            bider: state.profile,
            unitPrice: Number(inputValue),
            date: "03/02/2022",
            status: "ouverte",
          });
          setState({ ...state, sales: [...state.sales] });
          onClose();
        }}
      >
        Valider
      </Button>
    </Dialog>
  );
};

export default BidDialog;
