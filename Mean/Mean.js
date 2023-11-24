function ArithmeticMean(values) {
    if (values.length === 0) {
    throw Error('Input should be a non-empty array of values');
    }
    var sum = 0;
    for(var i=0 ; i<values.length;i++){
        sum = sum+ values[i]; 
    }
    const mean = sum / values.length;
    return mean;
}  

module.exports = ArithmeticMean;