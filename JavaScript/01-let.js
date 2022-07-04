// let a = 8 ;
// console.log(a);

// const person ={
//     addName(n){
//         this.name = n;
//     }
//     paymentMode(p){
//         this.pay = p;
//     }
// }

// const p1 = person();
// p1.addName("sachin");
// p1.paymentMode(100);
// console.log(p1);

const radius = [2, 3, 4, 5, 6];

const area = (r) => {
  return Math.PI * r * r;
};
const cuircumference = (r) => {
  return 2 * Math.PI * r;
};
const diameter = (r) => {
  return 2 * r;
};

const calculate = (radius, cal) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(cal(radius[i]));
  }
  return output;
};

let result = calculate(radius, area);
console.log(result);

result = calculate(radius, cuircumference);
console.log(result);

result = calculate(radius, diameter);
console.log(result);

console.clear();

result = radius.filter((x) => x > 4);
console.log(result);

