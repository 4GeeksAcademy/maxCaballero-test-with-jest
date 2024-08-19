// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


function fromDollarToYen(dolares){
    let euros = dolares / oneEuroIs["USD"];     // 20/1.07*156.5
    return euros * oneEuroIs["JPY"]; 
};

function fromEuroToDollar(euros){
    return euros * oneEuroIs["USD"];            // 10*1.07
};

function fromYenToPound(yenes){
    let euros = yenes / oneEuroIs["JPY"];       // 100/156.5*0.87
    return euros * oneEuroIs["GBP"]; 
};

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};