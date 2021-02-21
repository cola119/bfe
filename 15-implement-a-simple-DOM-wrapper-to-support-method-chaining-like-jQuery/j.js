/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  const css = function (propertyName, value) {
    el.style[propertyName] = value;
    return this;
  };
  return { css };
}
