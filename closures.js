function calcBmi(weight, height){
    var bmi = weight/Math.pow(height, 2);
    if(callback){
        callback(bmi);
    }
}

calcBmi(weight, height);