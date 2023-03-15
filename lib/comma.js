const addComma = (target) => {
  if (target) {
    return target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

module.exports = {
  addComma,
};
