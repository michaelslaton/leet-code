/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz (n) {
    let results = [];

    for(let i=1;i<=n;i++){
      const answer = n / i;
      if(i % 3 === 0 && i % 5 === 0) results.push("FizzBuzz");
      else if (i % 3 === 0) results.push("Fizz");
      else if (i % 5 === 0) results.push("Buzz");
      else results.push(i.toString())
    }

    return console.log(results);
};

fizzBuzz(3)