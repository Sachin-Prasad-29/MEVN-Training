const user = [
  { firstName: "Sachin", lastName: "Kumar", age: 23 },
  { firstName: "Niranjan", lastName: "Prasad", age: 25 },
  { firstName: "Sameer", lastName: "das", age: 25 },
  { firstName: "Nitish", lastName: "Singh", age: 30 },
];

// list of full names of the users

// const output = user.map(function findName(item) {
//   const fullname = `${item.firstName} ${item.lastName}`;
//   return fullname;
// });

// console.log(output);

const output = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc; 
}, {});

console.log(output);

const result = user.reduce(function (acc,curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
        console.log(curr.firstName);
    }
    return acc;
},[]);

console.log(result);
