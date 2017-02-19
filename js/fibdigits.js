function firstFibDigits(digits) {
  var fibArray = [0, 1];
  while (getLast(fibArray).toString().length < digits) {
    var last = getLast(fibArray);
    var penultimate = fibArray[fibArray.length - 2];
    fibArray.push(penultimate + last);
  }
  return fibArray.length - 1;
}

function getLast(arr) {
  return arr[arr.length - 1];
}

module.exports = firstFibDigits;