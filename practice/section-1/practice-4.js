'use strict';

function collectSameElements(collectionA, objectB) {

  var result = [];
  collectionA.forEach(function (element) {
    var is_exist = isExist(element.key, objectB.value);
    if (is_exist) {
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
  return false;
}

