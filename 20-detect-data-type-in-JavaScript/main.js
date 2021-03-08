/**
 * @param {any} data
 * @return {string}
 */

const typeMap = new Map([
  [Map, "map"],
  [Array, "array"],
  [ArrayBuffer, "arraybuffer"],
  [Set, "set"],
  [Date, "date"],
  [Function, "function"],
  [Number, "number"],
  [String, "string"],
  [Boolean, "boolean"],
]);

function detectType(data) {
  if (typeof data !== "object") return typeof data;
  if (data === null) return "null";
  for (const [obj, str] of typeMap) {
    if (data instanceof obj) return str;
  }
  return "object";
}
