import validator from 'validator';
import StringUtils from '../utils/string.utils';

function isEmailValid(email: string): boolean {
  return StringUtils.isNotEmpty(email) && validator.isEmail(email);
}

export default isEmailValid;
