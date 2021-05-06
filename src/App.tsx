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
    <Container component="main" maxWidth="xs">
			<CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <Paper variant="elevation" style={{boxShadow:`0px 38px 76px 0px rgba(11,29,66,0.1)`, borderRadius:'16px'}}>
					<Box p={2}>
					<Grid container direction="column" spacing={2}>
					<Grid item>
          <FormControl>
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
					</Grid>
					<Grid item>
					<FormControl>
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
							type="password"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
					</Grid>
					<Grid item>
          <Button variant="contained" color="primary">
            SignIn
          </Button>
					</Grid>
					</Grid>
					</Box>
        </Paper>
      </Grid>
    </Container>
  </div>
);

export default App;
