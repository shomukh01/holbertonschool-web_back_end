export default function cleanSet(set, startString) {
  if (!startString || !(set instanceof Set)) {
    return '';
  }

  return [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}

