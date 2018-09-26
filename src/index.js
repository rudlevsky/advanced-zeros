module.exports = function getZerosCount(number, base) {
  let zerosCount = 0; //Count of all zeros
  let allCounts = 5;

  while(allCounts <= number){
      zerosCount += Math.trunc(number / allCounts);
      allCounts *= 5;
  }

  return zerosCount;
}