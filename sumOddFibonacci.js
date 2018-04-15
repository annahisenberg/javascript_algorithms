function sumFibs(num) {
    var list = fibsUpTo(num);
     var total = 0;
     for (var i = 0; i < list.length; i++) {
         if(list[i] % 2 === 1) {
             total += list[i];
         }
     }
    return total;
  }

  // get list of Fibonacci Numbers
  // return sum of all odd numbers
  
  function fibsUpTo(num) {
     if (num === 1) {
       return [1, 1];
     } 

     var list = [1, 1];

     while (true) {
        var next = list[list.length - 1] + list[list.length - 2];
        if (next <= num) {
            list.push(next);
        } else {
            return list;
        }
     }  
  }

  fibsUpTo(4);
