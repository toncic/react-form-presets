class ValidationError {
  
  param: string | undefined = undefined;
  message: string | undefined = undefined;

  constructor(param: string, message: string) {
    this.param = param;
    this.message = message;
  }
}

export default ValidationError;
