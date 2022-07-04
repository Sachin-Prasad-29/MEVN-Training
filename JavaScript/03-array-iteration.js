const persons = [
    {
        name: 'John',
        salary: 1000,
        age: 32,
        emails: [
            'john@gmail.com',
            'john@fynd.com'
        ]
    },
    {
        name: 'Jane',
        age: 28,
        salary: 2000,
        emails: [
            'jane@gmail.com',
            'jane@fynd.com',
            'jane@yahoo.com',
        ]
    },
    {
        name: 'Mark',
        age: 46,
        salary: 3000,
        emails: [
            'mark@gmail.com',
            'mark@fynd.com'
        ]
    },
    {
        name: 'Mary',
        age: 44,
        salary: 4000,
        emails: [
            'mary@gmail.com',
            'mary@fynd.com'
        ]
    }
];

// find an item that satisfies some condition
// find() - returns a single item
// const middleAgedPerson = persons.find( 
//     function( item ) {
//         return item.age >= 35;
//     }
// );
const middleAgedPerson = persons.find( 
    item => item.age >= 35
);
console.log( middleAgedPerson );

// find ALL items that satisfy some condition
// filter() - returns a new array of items
const middleAgedPersons = persons.filter( 
    item => item.age >= 35
);
console.log( middleAgedPersons );

// iterate through all items and do something
// forEach() - like a for loop
// let us print the first email of every person
persons.forEach(
    ( item, idx ) => {
        console.log( 'Item idx = ', idx );
        item.age++;
        console.log( item.emails[0] );
    }
);
console.log( persons );

// a "transformed" array - [ 'John', 'Jane', 'Mark', 'Mary' ]
// map() - original array is not changed 
// map() returns a new array
const names = persons.map( item => item.name );
console.log( names );

let names2 = [];
persons.forEach(
    item => {
        names2.push( item.name );
    }
);
console.log( names2 );

// an "aggregate" value - min, max, average, sum etc (single value for the array)
// reduce()
// iter 1: acc = 0, item = john; returns 1000
// iter 2: acc = 1000, item = jane; returns 3000
// iter 3: acc = 3000, item = mark; return 6000
// iter 4: acc = 6000, item = mary; return 10000 (this final value is retruned by reduce)
const result = persons.reduce(
    ( acc, item ) => acc + item.salary,
    0
);
console.log( 'total salary = ', result );

const maxAge = persons.reduce(
    ( acc, item ) => {
        // return acc > item.age ? acc : item.age;
        return Math.max( acc, item.age );
    },
    -1
);
console.log( maxAge );