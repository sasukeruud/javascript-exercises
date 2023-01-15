const sumAll = function(num1,num2) {
    let num = 0;
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }

    if(typeof(num1) != typeof(1) || typeof(num2) != typeof(1)){
        return "ERROR";
    }

    if(num1 > num2){
        for(let i = num2; i <= num1; i++){
            num = num + i;
        }
    }else {
        for(let i = num1; i <= num2; i++){
            num = num + i;
        }
    }

    return num;
};

// Do not edit below this line
module.exports = sumAll;
