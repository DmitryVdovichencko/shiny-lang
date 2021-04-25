import React, { FC } from "react";
import {
  Typography,
  Button,
  AppBar,
  Grid,
  Box,
  Paper,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  Container,
  IconButton,
  CssBaseline,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
const AppBarHeader: FC = (props) => {
  return (
    <AppBar position="sticky">
      <Grid container direction="row">
        <Grid item container direction="row" justify="center" md={8}>
          <Typography variant="h6" noWrap>
            Shiny Lang
          </Typography>
        </Grid>
        <Grid container direction="row" item md={4} justify="flex-end">
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default AppBarHeader;
