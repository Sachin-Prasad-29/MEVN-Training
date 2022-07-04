// JSON - JavaScript Object Notation 
// Coverting JSON formatted string -> JS object / array 
// format for text {data -interchange format}

// Key in JSON is double coated
// value -> number , boolean , sting(double quoated), object , array , null
// gnearally , at the top-level you will find object / array


const personJSON = `[
    {
        "name": "John",
        "salary": 1000,
        "age": 32,
        "emails": [
            "john@gmail.com",
            "john@fynd.com"
        ]
    },
    {
        "name": "Jane",
        "age": 28,
        "salary": 2000,
        "emails": [
            "jane@gmail.com",
            "jane@fynd.com",
            "jane@yahoo.com"
        ]
    },
    {
        "name": "Mark",
        "age": 46,
        "salary": 3000,
        "emails": [
            "mark@gmail.com",
            "mark@fynd.com"
        ]
    },
    {
        "name": "Mary",
        "age": 44,
        "salary": 4000,
        "emails": [
            "mary@gmail.com",
            "mary@fynd.com"
        ]
    }
]`;
// taking the data from server in JSON format and converting that to ARray object
const personArr = JSON.parse(personJSON);
console.log(personArr);

// convert the data back to server
const personJSONupdated = JSON.stringify(personArr,null,6);
console.log(personJSONupdated);