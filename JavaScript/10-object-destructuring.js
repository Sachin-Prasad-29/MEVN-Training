const john = {
  name: "John",
  age: 32,
  emails: ["john@gamil.com", "john@fynd.com"],
  children: ["jack", "Jill"],
  address: {
    city: "Mumbai",
    area: "Bandra",
    pincode: 40010,
  },
};

// const name = john.name, age = john.age, firstEmail = john.emils[0],
// child1 = john.children[0] ,city = john.address,city

const {
  age: a,
  name: n,
  address: { city, area, pincode },
  emails: [fe, se],
  children: [fc, sc],
} = john;
console.log(a, n, city, area, pincode, fe, se, fc, sc);


function printPerson({name,age}){
    console.log()
}