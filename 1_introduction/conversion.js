console.log("----------------Data types---------------");
// coversion [datatype] to number 


let someString = 33
let afterConvertingToNumber = Number(someString)
console.log(typeof(afterConvertingToNumber))
console.log(afterConvertingToNumber);


/**
 * "33" => number
 * null =>0
 * undefined =>NaN
 * Object =>NaN
 * "33a"=>NaN
 * 33 =>number
 */



// converting [datatype] to Boolean

let isLoggin = Object
let AfterConvertingToBoolean = Boolean(isLoggin)
console.log(typeof(afterConvertingToNumber));
console.log(AfterConvertingToBoolean);



/**
 * 1 => true
 * 0 => false
 * "" =>false
 * "str" => true
 * null => false
 * undefined = false
 * Object => true
 */

/// coverting [datatypes] to string

let data = [12,"wqwe",()=>{"ds"},true]
let dataAfetrConversion = String(data)
console.log(typeof(data));
console.log(dataAfetrConversion);
console.log(typeof(dataAfetrConversion));
console.log(`I am ${dataAfetrConversion} and fine`);

/**
 * 
 * 34 =>string
 * "3265fdg" =>string
 * null => string
 * Object => function Object() { [native code] }
 * undefined =>
 * Boolean => true/fasle
 */

console.log(2**3);

let x = 3;


    const y = x++;

console.table([x,y])

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
console.table([x2,y2])

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**2)
// console.log(2=2)