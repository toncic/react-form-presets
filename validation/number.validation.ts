import validator from "validator";

export function isInt(value: string, min?: number, max?: number): boolean {
  return validator.isInt(value, { min, max });
}
