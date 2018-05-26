export const removeSeparators = value => {
  const delSpaces = value
    .toString()
    .replace(/\s+/g, '')
    .replace(/,+/g, '');
  return delSpaces || '';
};
