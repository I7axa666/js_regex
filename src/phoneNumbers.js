export default function validateNumber(str) {
  const number = str.replace(/[^\d]/g, '');
  const cleanNumber = /(?<numberGroup>\d{10}$)/.exec(number);
  let countryCode = number.slice(0, -10);
  if (countryCode === '8') { countryCode = 7; }
  const result = `+${countryCode}${cleanNumber.groups.numberGroup}`;
  return result;
}
