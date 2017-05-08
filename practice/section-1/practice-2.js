'use strict';

function collectSameElements(collectionA, collectionB) {

  var result = [];
  collectionA.forEach(function (element) {
    var is_exist = isExist(element, collectionB[0]);
    if (is_exist) {
      result.push(element);
    }
  });

  /*for (var i = 0; i < collectionA.length; i++) {
   var is_exist = isExist(collectionA[i], collectionB[0]);
   if (is_exist) {
   result.push(collectionA[i]);
   }
   }*/

  /* for (var i = 0; i < collectionA.length; i++) {
   for (var j = 0; j < collectionB[0].length; j++) {
   if (collectionA[i] === collectionB[0][j]) {
   result.push(collectionA[i]);
   }
   }
   }*/


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

