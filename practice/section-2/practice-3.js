'use strict';

function countSameElements(collection) {
  var result = [];

  for (var i = 0; i < collection.length; i++) {
    var newObject = judge(collection[i]);
    var object = isExist(newObject.name, result);
    if (object) {
      object.summary += parseInt(newObject.number);
    } else {
      result.push({name: newObject.name, summary: newObject.number});
    }
  }

  return result;
}


function isExist(element, array) {
  
  for (var i = 0; i < array.length; i++) {
    if (element === array[i].name) {
      return array[i];
    }
  }
}


function judge(string) {
  var object = {};

  if (string.length === 1) {
    object = {name: string, number: 1};
  } else if (string.length === 3) {
    object = {name: string.charAt(0), number: parseInt(string.substring(2))}
  }
  else {
    object = {name: string.charAt(0), number: parseInt(string.substring(2, string.length - 1))}
  }

  return object;
}
