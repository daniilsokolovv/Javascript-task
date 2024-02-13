const mixedArray = [4, 21, 48, 12, 16, 30, 3, 79];

const isEven = num => {
  return num % 2 === 0;
}

const filterArray = ( arrayToFilter, filterFn ) => {
  const filteredArray = [];

  arrayToFilter.forEach(num => {
    if (filterFn(num)) {
      filteredArray.push(num);
    }
  })

  return filteredArray;
}

console.log(filterArray(mixedArray, isEven));