const reverseString = function(text) {
    let array = [];
    for(let i = text.length-1; i >= 0; i--){
        array.push(text[i]);
    }
    return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
