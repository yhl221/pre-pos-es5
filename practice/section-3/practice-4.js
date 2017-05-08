'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var newArray = buildNewArray(collectionA);
  newArray.forEach(function (element) {
    var is_exist = isExistKey(element.key, objectB.value);
    var number = parseInt(element.count / 3);
    if (is_exist) {
      element.count -= number;
    }
  });
  return newArray;
}

function buildNewArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var newArray = array[i].split("-");
    var getObject = judge(newArray);
    var object = isExistObject(newArray[0], result);
    if (object) {
      object.count += getObject.number;
    } else {
      result.push({key: getObject.key, count: getObject.number});
    }
  }

  return result;
}

function isExistKey(element, array) {
  for (var i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return true
    }
  }
  return false;
}

function isExistObject(element, array) {
  for (var i = 0; i < array.length; i++) {
    if (element === array[i].key) {
      return array[i];
    }
  }
  return false;
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
