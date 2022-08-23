import Validation from "../../../validation";
import { FieldPreset } from "./field.preset";

function EmailPreset(
  name: string,
  required: boolean,
  label: string = "E-mail address",
  invalidErrorMessage: string = "Invalid e-mail address",
  emptyErrorMessage: string = "E-mail address can't be empty",
  placeholder?: string,
): FieldPreset {
  return {
    name,
    fieldType: 'email',
    label,
    required,
    invalidErrorMessage,
    emptyErrorMessage,
    validation: Validation.isEmailValid,
    placeholder,
  }
}

export default EmailPreset;