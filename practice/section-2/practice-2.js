'use strict';

function countSameElements(collection) {
  var result = [];

  for (var i = 0; i < collection.length; i++) {
    var newArray = collection[i].split("-");
    var newObject = judge(newArray);
    var object = isExist(newArray[0], result);
    if (object) {
      object.count += newObject.number;
    } else {
      result.push({key: newObject.key, count: newObject.number});
    }
  }

  return result;
}


function isExist(element, array) {

  for (var i = 0; i < array.length; i++) {
    if (element === array[i].key) {
      return array[i];
    }
  }
}


function judge(array) {

  var object = {};
  if (array.length === 1) {
    object = {key: array[0], number: 1};
  } else {
    object = {key: array[0], number: parseInt(array[1])}
  }

  return object;
}
