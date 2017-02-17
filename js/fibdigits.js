function firstFibDigits(digits) {
  if (digits === 1) {
    return 1;
  }
  var fibArray = [1, 1];
  while (getLast(fibArray).toString().length < digits) {
    var last = getLast(fibArray);
    var penultimate = fibArray[fibArray.length - 2];
    fibArray.push(penultimate + last);
  }
  return fibArray.length;
}

function getLast(arr) {
  return arr[arr.length - 1];
}

module.exports = firstFibDigits;