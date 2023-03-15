const addClass = (element, className) => {
  const check = new RegExp("(\\s|^)" + className + "(\\s|$)");
  if (element) {
    if (check.test(element.className)) {
      return 0;
    } else {
      element.className += " " + className;
    }
  }
};

const removeClass = (element, className) => {
  const check = new RegExp("(\\s|^)" + className + "(\\s|$)");
  if (element) {
    element.className = element.className.replace(check, " ").trim();
  }
};

const removeAllClass = (element) => {
  element.className = " ";
};

module.exports = {
  addClass,
  removeClass,
  removeAllClass,
};
