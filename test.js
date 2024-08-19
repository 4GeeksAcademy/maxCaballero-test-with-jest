const {fromDollarToYen,fromEuroToDollar, fromYenToPound } = require('./app.js');

test('convirte 20 dolares a yenes', () =>{
    let cambio01 = fromDollarToYen(20);
    expect(cambio01).toBeCloseTo(2925.23,2)
});


test('convirte 10 euros a dolares', () =>{
    let cambio02 = fromEuroToDollar(10);
    expect(cambio02).toBeCloseTo(10.70,2)
});

test('convirte 1000 yenes a libras', () =>{
    let cambio03 = fromYenToPound(1000);
    expect(cambio03).toBeCloseTo(5.56,2)
})