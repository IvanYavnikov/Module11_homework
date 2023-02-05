let a = prompt('Enter start number');
let b = prompt('Enter end number');

function NumbersInterval() {
    var i = a;
    var y = b;
    var timerId = setInterval(function() {
      console.log(i);
      if (i == b) clearInterval(timerId);
      i++;
    }, 1000);
  }

  NumbersInterval();