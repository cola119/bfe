/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  const map = new Map();
  excludes.forEach((exclude) => {
    if (map.has(exclude.k)) {
      const set = map.get(exclude.k);
      set.add(exclude.v);
      map.set(exclude.k, set);
    } else {
      const set = new Set();
      set.add(exclude.v);
      map.set(exclude.k, set);
    }
  });

  return items.filter((item) => {
    return !Object.keys(item).some(
      (key) => map.get(key) && map.get(key).has(item[key])
    );
  });
}
