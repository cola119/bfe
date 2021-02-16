/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  let timer = null;
  let lastArgs = null;
  return (...args) => {
    if (timer) {
      lastArgs = args;
    } else {
      func(...args);
      timer = setTimeout(() => {
        timer = null;
        lastArgs && func(...lastArgs);
      }, wait);
    }
  };
}

function tester(input) {
  let currentTime = 0;

  const run = async (input) => {
    currentTime = 0;

    const calls = [];

    const func = (arg) => {
      calls.push(`${arg}@${currentTime}`);
    };

    const throttled = throttle(func, 3);
    const promises = input.map((call) => {
      const [arg, time] = call.split("@");
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          throttled(arg);
          resolve();
        }, time);
      });
    });

    setInterval(() => {
      currentTime++;
    }, 1);
    await Promise.all(promises);
    console.log(calls);
  };

  return run(input);
}

async function main() {
  await tester(["A@0", "B@2", "C@3"]);
  await tester(["A@0", "B@2", "C@3", "D@4", "E@5", "F@6"]);
}

main();
