// function foo1(a) {
//   let b = 100;

//   function bar() {
//     console.log("I am bar within foo1");
//     console.log(a);
//     console.log(b);
//   }
//   return bar;
// }

// const bar1 = foo1(10);
// const bar2 = foo1(20);
// const bar3 = foo1(30);

// console.log(bar1);
// console.log(bar2);
// console.log(bar3);

// bar1();
// bar2();
// bar3();


// function person(){
//     const details ={};
//     const p = {
//         paymentModes(type,value){
//             details.paymentMode.type = type;
//             details.paymentMode.value= value;
//         }
//     }
// }
// const p1 = person();
// p1.name = "ABC";
// p1.paymentModes('cc',123535245);

// console.log(p1);\

odd = x => x % 2 === 1;
 even = x => x % 2 === 0;

filter => (arr,oper) {
    const ans = [];
    for(let  i = 0 ; i < arr.length ;i++){
        if(oper) ans.push(arr[i]);
    }
    return ans;
}


console.log(filter([1,4,7,2,9,11,41,34],odd);
console.log(filter([1,4,7,2,9,11,41,34],even));