'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];

  collectionA.forEach(function (element) {
    if (isExist(element, collectionB[0])) {
      result.push(element);
    }
  });

  return result;
}


function isExist(element, array) {

  for (var i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return true;
    }
  }
}

