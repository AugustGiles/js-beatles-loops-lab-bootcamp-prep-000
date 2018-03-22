function beatlesLoops(array1, array2) {
  var newArray = []; 
  for (n = 0; n < array1.length; n++) {
    newArray.push(`${array1[n]} plays ${array2[n]}`);
  } return newArray;
}

function johnLennonFacts(factsArray) {
  var newArray = [];
  var n = 0;
  while (n < factsArray.length) {
    newArray.push(`${factsArray[n]}!!!`); n++;
  } return newArray;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push(`I love the Beatles!`); n++;
  } while (n < 15);
  return newArray;
}