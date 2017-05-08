'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];

  collectionA.forEach(function (element) {
    if (isExist(element, objectB.value)) {
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

