import React from "react";
import {
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
} from "@material-ui/core";
import { ControllerRenderProps } from "react-hook-form";
import { AccountCircle } from "@material-ui/icons";
import { IFormInput } from "./index";
interface EmailProps {
  field: ControllerRenderProps<IFormInput, "username">;
}
const EmailField = (props: EmailProps) => {
  const { field } = props;
  return (
    <FormControl>
      <InputLabel htmlFor="username">Login</InputLabel>
      <Input
        id="username"
        {...field}
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
export default EmailField;
