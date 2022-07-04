// rest(...) / spread(...)

// rest
// 1. to gather remaining arguments in function parameter list

function sum (transform , ...args){
    console.log(args);
    let s = 0;
    return args.reduce((s,item) => s + item);
}
let result ;

result = sum(x=> x*x, 1,2,3,4,5,6,7);
console.log(result);

result = sum(x => x*x*x, 1,7,2,3,4,5,6,7);
console.log(result);

result = sum(Math.abs, -1,-2,3,5,-5,-8,-3);
console.log(result);