import { useCallback, useEffect, useState } from 'react';
import ValidationResult from '../../validation/validation.result';
import { TextField, InputAdornment, TextFieldProps } from '@mui/material';
import { FieldPreset, validate } from './presets/field.preset';

type PropTypes = Omit<TextFieldProps, "error"> & {
  preset: FieldPreset,
  onChange: (event: any) => void,
  error?: ValidationResult,
}

const OutlinedInputField = ({
  preset,
  onChange,
  error,
  ...props
}: PropTypes) => {
  const [validationState, setValidationState] = useState<ValidationResult>();

  useEffect(() => {
    if (error) {
      setValidationState(error);
    }
  }, [error])

  const onChangeHandler = useCallback((event: any) => {
    event.preventDefault();
    onChange(event);
    const validationResult = validate(preset, event.target.value);
    setValidationState(validationResult);
  }, [preset, onChange]);

  return (
    <TextField
      {...props}
      helperText={validationState?.error?.message ?? preset.placeholder}
      variant="outlined"
      label={preset.label}
      onChange={onChangeHandler}
      error={validationState?.hasError()}
      type={preset.fieldType}
      required={preset.required}
      InputProps={preset.prefixText || preset.postfixText ? {
        startAdornment: preset.prefixText ? <InputAdornment position="start">{preset.prefixText}</InputAdornment> : undefined,
        endAdornment: preset.prefixText ? <InputAdornment position="end">{preset.postfixText}</InputAdornment> : undefined,
      } : undefined}
    />
  )
}

export default OutlinedInputField;