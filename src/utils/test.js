var reverse = function (x) {
  let res;
  if (x < 0) {
    res = parseInt("-" + Math.abs(x).toString().split("").reverse().join(""));
  } else {
    res = parseInt(Math.abs(x).toString().split("").reverse().join(""));
  }
  if (res > 2 ** 31 - 1 || res < (-2) ** 31) return 0;
  return res;
};
console.log(reverse(-123));
