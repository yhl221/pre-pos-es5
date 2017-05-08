'use strict';

function createUpdatedCollection(collectionA, objectB) {

  collectionA.forEach(function (element) {
    var is_exist = isExist(element.key, objectB.value);
    if (is_exist) {
      element.count--;
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
  return false;
}
