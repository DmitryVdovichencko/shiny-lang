import React, { FC } from "react";
import {
  Button,
  Grid,
  Box,
  Paper
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";

export interface IFormInput {
  username: string;
  password: string;
}

const onSubmit = (data: IFormInput) => {
  alert(JSON.stringify(data));
};
const SignInForm: FC = () => {
  const { control, handleSubmit } = useForm<IFormInput>();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Paper
        variant="elevation"
        style={{
          boxShadow: `0px 38px 76px 0px rgba(11,29,66,0.1)`,
          borderRadius: "16px",
        }}
      >
        <Box p={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Controller
                  render={({ field }) => <EmailField {...{ field }} />}
                  name="username"
                  control={control}
                  defaultValue=""
                />
              </Grid>
              <Grid item>
                <Controller
                  render={({ field }) => <PasswordField {...{ field }} />}
                  name="password"
                  control={control}
                  defaultValue=""
                />
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  SignIn
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SignInForm;
