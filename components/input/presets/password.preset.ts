import Validation from "../../../validation";
import { FieldPreset } from "./field.preset";

function PasswordPreset(
  name: string,
  required: boolean,
  label: string = "Password",
  invalidErrorMessage: string = "Password is too short",
  emptyErrorMessage: string = "Password can't be empty",
): FieldPreset {
  return {
    name,
    fieldType: 'password',
    label,
    required,
    invalidErrorMessage,
    emptyErrorMessage,
    validation: Validation.isPasswordValid,
  }
}

export default PasswordPreset;