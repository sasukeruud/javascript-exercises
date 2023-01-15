const repeatString = function(text, number) {
    if(number < 0){
        return "ERROR"
    }
    let array = [];
    for(let i = 0; i < number; i++){
        array.push(text);
    }
    return array.join("");
};

// Do not edit below this line
module.exports = repeatString;
