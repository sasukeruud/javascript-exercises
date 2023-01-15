const removeFromArray = function(array, remove1, remove2,remove3,remove4) {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] === remove1 || array[i] === remove2 || array[i] === remove3
            || array[i] === remove4){
            continue;
        }
        newArray.push(array[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
