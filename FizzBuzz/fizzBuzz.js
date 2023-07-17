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

    return results;
};


console.log(fizzBuzz(3)); // ['1','2','Fizz']
console.log(fizzBuzz(5)); // ['1','2','Fizz','4','Buzz']
console.log(fizzBuzz(15)); // ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']