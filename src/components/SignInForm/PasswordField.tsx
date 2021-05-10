import React from "react";
import {
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
} from "@material-ui/core";
import { ControllerRenderProps } from "react-hook-form";
import { Lock } from "@material-ui/icons";
import { IFormInput } from "./index";
interface PasswordProps {
  field: ControllerRenderProps<IFormInput, "password">;
}
const PasswordField = (props: PasswordProps) => {
  const { field } = props;
  return (
    <FormControl>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input
        id="password"
        type="password"
        {...field}
        startAdornment={
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
export default PasswordField;
