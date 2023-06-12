// Muhammad Ariyanda Zulyadiansyah

// Task 4

function printsegitiga(num) {
  for (var i = num; i >= 1; i--) {
    var row = '';
    for (var j = i; j >= 1; j--) {
      row += i + '';
    }
    console.log(row);
  }
}

printsegitiga(7);
