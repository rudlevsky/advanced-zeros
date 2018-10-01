module.exports = function getZerosCount(number, base) {
  k = base;
  variants = [];
  for (let i = 2; i <= base;) {
    if (k % i == 0) {
      if (isNaN(variants[i])) {
        variants[i] = 0;
      }
      variants[i]++;
      k /= i;
    }
    else i++;
  }

  var answer = [];
  for (let i = 0; i <= base; ++i) {
    if (!isNaN(
      variants[i])) {
      var temp = i, res = 0;
      while (number / temp) {
        res = res + Math.floor(number / temp);
        temp = temp * i;
      }
      answer.push(Math.floor(res /
        variants[i]));
    }
  }
  return arrayMin(answer);
}
function arrayMin(array) {
  return array.reduce((a, b) => Math.min(a, b));
}
  