/**
 * @param { Function } func
 */
function curry(func) {
  return function inner_curry(...args) {
    if (
      func.length <= args.length &&
      !args.slice(0, func.length).includes(curry.placeholder)
    ) {
      return func(...args);
    } else {
      return (...args2) => {
        const newArgs = [];
        for (const arg of args) {
          if (arg === curry.placeholder && args2.length > 0) {
            newArgs.push(args2.shift());
          } else {
            newArgs.push(arg);
          }
        }
        return inner_curry(...newArgs, ...args2);
      };
    }
  };
}

curry.placeholder = Symbol();

const main = () => {
  const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
  };

  const curriedJoin = curry(join);
  const _ = curry.placeholder;

  console.log(curriedJoin(1, 2, 3)); // '1_2_3'

  console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'

  console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'
  console.log(curriedJoin(_, _, _, _)(_, 2, _)(_, 3)(1)); // '1_2_3'
};

main();
