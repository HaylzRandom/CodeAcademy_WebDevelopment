const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = array => {
      let results = [];
      // The 'outer' for loop:
      for (let i = 0; i < array.length; i++) {
            number = array[i];

            // The 'inner' while loop:
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results;
}

console.log(smallestPowerOfTwo(numbers));