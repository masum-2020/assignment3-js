function brickCalculator(floor){
    var feet = 1000;
    if(floor <= 10){
        var step1 = feet * 15 * floor;
        return step1;
    }
    else if (floor >= 11 && floor <= 20){
        var step2 = feet * 12 * floor;
        return step2;
        
    }
    else if (floor >= 30){
        var step3 = feet * 10 * floor;
        return step3;
    }
    return step1 + step2 + step3;
      
}
var result = brickCalculator(30);
console.log(result);