export default function validateUsername(string) {
  return !/[^\w|-]|\d{4}|^-|^_|^\d|\d$|_$|-$/.test(string);
}
