/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  const cache = new Map();
  return function (...args) {
    resolver = resolver || getCacheKey;
    const key = resolver(...args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const res = func.apply(this, args);
    cache.set(key, res);
    return res;
  };
}
const getCacheKey = (...args) => {
  return args.join("_");
};
