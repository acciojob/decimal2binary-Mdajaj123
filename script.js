function decimalToBinary(num) {
  //Write you code here
  return num.toString(2);
}
let decimalnumber1=7;
let binarynumber1=decimalToBinary(decimalnumber1);
console.log(binarynumber1)

let decimalnumber2=10;
let binarynumber2=decimalToBinary(decimalnumber2);
console.log(binarynumber2)
let decimalnumber3=33;
let binarynumber3=decimalToBinary(decimalnumber3);
console.log(binarynumber3)

window.decimalToBinary = decimalToBinary;
