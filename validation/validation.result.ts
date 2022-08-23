import ValidationError from "./validation.error";

class ValidationResult {
  isSuccessful: boolean = false;
  error: ValidationError | undefined = undefined;

  private constructor(isSuccessful: boolean, error: ValidationError | undefined) {
    this.isSuccessful = isSuccessful;
    this.error = error;
  }

  static success(): ValidationResult {
    return new ValidationResult(true, undefined);
  }

  static failed(error: ValidationError): ValidationResult {
    return new ValidationResult(false, error);
  }

  hasError(): boolean {
    return !this.isSuccessful;
  }
}

export default ValidationResult;
