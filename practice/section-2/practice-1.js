'use strict';

function countSameElements(collection) {
     var result=[];
    for(var i=0;i<collection.length;i++){
       var object=isExist(collection[i],result);
       if(object){
         object.count++;
       }else{
         result.push({key:collection[i],count:1});
       }
    }

  return result;
}


function isExist(element,array) {
  for(var i=0;i<array.length;i++){
    if(element === array[i].key){
      return array[i];
    }
  }
  return false;
}
