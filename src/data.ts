export const generatePlaceholderContent = (nItems: number) => {
  const result = Array(3);
  for (let i = 0; i < 3; i++) {
    result[0] = "Google Docs";
    result[1] = "Google Plus";
    result[2] = "Google Hangouts";
  }
  return result;
};
