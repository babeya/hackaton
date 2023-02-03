import React, { useContext } from "react";

import { Link } from "gatsby";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { PageContext, PROFILE_CONFIGS } from "./constants";

const CustomAppBar = () => {
  const { state, setState } = useContext(PageContext);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { profile } = state;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ color: "white" }}>
              Greentronics
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>{PROFILE_CONFIGS[profile].icon}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                selected={profile === "company"}
                onClick={() => {
                  setState({ ...state, profile: "company" });
                  handleCloseUserMenu();
                }}
              >
                <Typography textAlign="center">Profile entreprise</Typography>
              </MenuItem>
              <MenuItem
                selected={profile === "recycling"}
                onClick={() => {
                  setState({ ...state, profile: "recycling" });
                  handleCloseUserMenu();
                }}
              >
                <Typography textAlign="center">Profile recycleur</Typography>
              </MenuItem>
              <MenuItem
                selected={profile === "refurbishing"}
                onClick={() => {
                  setState({ ...state, profile: "refurbishing" });
                  handleCloseUserMenu();
                }}
              >
                <Typography textAlign="center">
                  Profile reconditioneur
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
