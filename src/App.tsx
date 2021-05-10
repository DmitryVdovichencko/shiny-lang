import React, { FC } from "react";
import "./App.css";
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
	CssBaseline
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import SignInForm from "./components/SignInForm/";
const App: FC = () => (
  <div className="App">
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
		<Container component="main" maxWidth="xs" style={{minHeight:'90vh'}}>
<CssBaseline />
<SignInForm />
</Container>
  </div>
);

export default App;
