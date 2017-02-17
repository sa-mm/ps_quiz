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

var out = flashBang(1,25);