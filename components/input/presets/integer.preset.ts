import Validation from "../../../validation";
import { FieldPreset } from "./field.preset";

function IntegerPreset(
  name: string,
  required: boolean,
  label: string,
  invalidErrorMessage: string,
  emptyErrorMessage: string,
  min?: number,
  max?: number,
  postfixText?: string,
): FieldPreset {
  return {
    name,
    fieldType: 'number',
    label,
    required,
    invalidErrorMessage,
    emptyErrorMessage,
    postfixText,
    validation: (text) => Validation.isInt(text, min, max),
  }
}

export default IntegerPreset;