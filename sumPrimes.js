function sumPrimes(num) {
    var array = [];

    for(var i = 2; i <= num; i++) {
        for(var j = 2; j <= i; j++) {
            if(i === j) {
                array.push(i); 
            } 
            if (i % j === 0) {
                    break;
                }
            }
        }
        return array.reduce(function(x,y) {
            return x + y;
        });
    } 
  }
  
  sumPrimes(10);
  