function isEmpty(value: string, trim: boolean = true): boolean {
  if (value === undefined || value === null) {
    return true;
  }

  const valueToCheck = trim ? value.trim() : value;
  return valueToCheck.length === 0;
}

function isNotEmpty(value: string, trim: boolean = true): boolean {
  return !isEmpty(value, trim);
}

const StringUtils = {
  isEmpty,
  isNotEmpty
}


export default StringUtils;
