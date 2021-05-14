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
  CssBaseline,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import SignInForm from "./components/SignInForm/";
import Layout from "./components/Layout/";
import Home from "./components/Home/";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthRoutes } from "./components/AuthRoute/routes";
import { userRoles } from "./components/AuthRoute/userRoles";
import AuthRoute from "./components/AuthRoute";
import Profile from "./components/Profile";
import AccessDenied from "./components/AccessDenied";
const App: FC = () => (
  <div className="App">
    <Layout>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignInForm} />
				<AuthRoute
          path={AuthRoutes.account}
          Component={Profile}
          requiredRoles={userRoles.admins}
        />
        <AuthRoute
          path={AuthRoutes.accessDenied}
          Component={AccessDenied}
          requiredRoles={userRoles.all}
        />
      </BrowserRouter>
    </Layout>
  </div>
);

export default App;
