import StringUtils from "../../../utils/string.utils";
import ValidationError from "../../../validation/validation.error";
import ValidationResult from "../../../validation/validation.result";

export interface FieldPreset {
  name: string,
  fieldType: string,
  label: string,
  required: boolean,
  emptyErrorMessage: string,
  invalidErrorMessage?: string,
  placeholder?: string,
  prefixText?: string,
  postfixText?: string,
  validation(text: string): boolean,
}

export function validate(preset: FieldPreset, text: string): ValidationResult {
  const inputExists = StringUtils.isNotEmpty(text);
  const inputIsValid = preset.validation(text);
  if (!preset.required && !inputExists) {
    return ValidationResult.success();
  }

  if (preset.required && !inputExists) {
    const emptyError = new ValidationError(
      preset.name,
      preset.emptyErrorMessage ?? 'Invalid value'
    );

    return ValidationResult.failed(emptyError);
  }

  if (inputExists && inputIsValid) {
    return ValidationResult.success();
  }

  if (inputExists && !inputIsValid) {
    const invalidError = new ValidationError(
      preset.name,
      preset.invalidErrorMessage ?? `Invalid ${preset.label}`
    );

    return ValidationResult.failed(invalidError);
  }

  return ValidationResult.success();
}