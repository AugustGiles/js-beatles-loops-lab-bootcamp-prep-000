function beatlesLoops(array1, array2) {
  var newArray = []; 
  for (n = 0; n < array1.length; n++) {
    newArray.push(`${array1[n]} plays ${array2[n]}`);
  } return newArray;
}

function johnLennonFacts(factsArray) {
  var newArray = [];
  n = 0;
  while (n < factsArray.length) {
    newArray.push(`${factsArray[n]}!!!`); n++;
  } return newArray;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push(`I love the Beatles!`)
  } while (n <= 7);
  return newArray
}