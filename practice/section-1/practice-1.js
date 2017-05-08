'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];

  for (var i = 0; i < collectionA.length; i++) {
    if (isExist(collectionA[i], collectionB)) {
      result.push(collectionA[i]);
    }
  }
  return result;
}


function isExist(element, array) {
  for (var i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return true;
    }
  }
}
