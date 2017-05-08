'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  /*  collectionA.forEach(function(element){
   var is_exist=isExist(element,collectionB);
   if(is_exist){
   result.push(element);
   }
   });*/

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
