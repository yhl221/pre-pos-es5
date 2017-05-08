'use strict';

function countSameElements(collection) {
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        var newArray = collection[i].split("-");
        var newObject = judge(newArray);
        var object = isExist(newArray[0], result);
        /*if (newArray.length === 1) {
            if (object) {
                object.count++
            } else {
                result.push({key: collection[i], count: 1});
            }
        } else {
            if (object) {
                object.count += parseInt(newArray[1]);
            } else {
                result.push({key: newArray[0], count: parseInt(newArray[1])});
            }
        }*/
        if(object){
            object.count+=newObject.number;
        }else{
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
    return false;
}

function judge(array) {
    var object={};
    if(array.length===1){
        object={key:array[0],number:1};
    }else{
        object={key:array[0],number:parseInt(array[1])}
    }

    return object;
}