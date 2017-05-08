'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];

  collectionA.forEach(function (element) {
    if (isExist(element.key, objectB.value)) {
      result.push(element.key);
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

