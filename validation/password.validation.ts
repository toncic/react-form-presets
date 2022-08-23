import StringUtils from "../utils/string.utils";

function isPasswordValid(password: string, shallowOnly: boolean = false): boolean {
  if (StringUtils.isEmpty(password, false)) {
    return false;
  }
  
  return shallowOnly || (password.length >= 6 && password.length <= 128);
}

export default isPasswordValid;
