'use strict';

function createUpdatedCollection(collectionA, objectB) {

  collectionA.forEach(function (element) {
    var number = parseInt(element.count / 3);
    if (isExist(element.key, objectB.value)) {
      element.count -= number;
    }
  });

  return collectionA;
}


function isExist(element, array) {

  for (var i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return true;
    }
  }
}
