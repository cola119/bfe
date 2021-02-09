const curry = (fn) => {
  return function curried(...args) {
    if (fn.length <= args.length) return fn(...args);
    return (...args2) => curried(...args, ...args2);
  };
};

const main = () => {
  const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
  };
  const curriedJoin = curry(join);
  console.log(curriedJoin(1, 2, 3)); // '1_2_3'
  console.log(curriedJoin(1, 2, 3, 4)); // '1_2_3'
  console.log(curriedJoin(1)(2, 3)); // '1_2_3'
  console.log(curriedJoin(1, 2)(3)); // '1_2_3'
  console.log(curriedJoin(1)(2)(3)); // '1_2_3'
};

main();
