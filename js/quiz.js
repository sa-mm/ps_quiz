
function flashBang(x,y) {
  var count = x + 1;
  while (count < y) {
    if (count % 3 === 0 && count % 5 === 0) {
      console.log('FlashBang');
    } else if (count % 3 === 0) {
      console.log('Flash');
    } else if (count % 5 === 0) {
      console.log('Bang');
    } else {
      console.log(count.toString());
    }
    count++;
  }
}
// var out = flashBang(1,25);

function commaList(arr) {
 return arr.reduce(function(str,word,index,array) {
   if (index === 0) {
     return str += word;
   } else if (index === array.length - 1) {
     return str += ', and ' + word;
   }
  
   return str += ', ' + word;
  },'');
}

// var out = commaList(['one', 'two', 'three']);
// console.log(out);

//not finished
function firstFibDigits(digits) {
  var keepGoing = true;
  var fibArray = [];
  while (keepGoing) {
    var num = 3;
    var arr = [1,1];
    for (var i = 0, j = 1; arr[i] + arr[j] <= num; i++, j++) {
      arr.push(arr[i] + arr[j]);
    }
    console.log(arr);
    fibArray = arr.filter(function(item) {
      return item.toString().length === digits;
    });
    console.log(fibArray);

    if (fibArray.length > 0) {
      // keepGoing = false;
      break;
    }
    num = arr[arr.length - 1];
  }
  return fibArray[0];
}

// var out = firstFibDigits(13);
// console.log(out);


// UPDATES

function firstFibDigits(digits) {
  var fibArray = [1,1];
  while (getLast(fibArray).toString().length < digits) {
    var last = getLast(fibArray);
    var penultimate = fibArray[fibArray.length -2];
    fibArray.push(penultimate + last);
  }
  return fibArray.length;
}

function getLast(arr) {
  return arr[arr.length - 1];
}

var out = firstFibDigits(3);
console.log(out);

function flashBang(x, y) {
  var count = x;
  while (count < y) {
    var result = '';

    if (count % 3 === 0) {
      result += 'Flash';
    }

    if (count % 5 === 0) {
      result += 'Bang';
    }

    if (result.length > 0) {
      console.log(result);
    } else {
      console.log(count);
    }
    count++;
  }
}