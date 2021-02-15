/**
 * @param { Array } arr
 * @param { number } depth
 */
function flat(arr, depth = 1) {
  if (depth <= 0) {
    return arr;
  }
  const res = [];
  for (const el of arr) {
    if (typeof el === "number") {
      res.push(el);
    } else if (Array.isArray(el)) {
      res.push(...flat(el, depth - 1));
    } else {
      throw new Error(`Unexpected type: ${el}`);
    }
  }
  return res;
}
