'use strict';

function createUpdatedCollection(collectionA, objectB) {

  var newArray=buildNewArray(collectionA);
  newArray.forEach(function (element) {
    var is_exist = isExistKey(element.key, objectB.value);
    var number=parseInt(element.count/3);
    if (is_exist) {
      element.count-=number;
    }
  });
  return newArray;
}

function buildNewArray(array) {
  var newArray=[];
  for(var i=0;i<array.length;i++){
    var newObject=isExistObject(array[i],newArray);
    if(newObject){
      newObject.count++;
    }else{
      newArray.push({key:array[i],count:1});
    }
  }

  return newArray
}

function isExistKey(element,array) {
  for(var i=0;i<array.length;i++){
    if(element === array[i]){
      return true
    }
  }

  return false;
}

function isExistObject(element,array) {
  for(var i=0;i<array.length;i++){
    if(element === array[i].key){
      return array[i];
    }
  }

  return false;
}
