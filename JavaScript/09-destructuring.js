//arrays
// ES2015 -> ECMAScript

const weekdays= [
    'Monday',
    'TuesDay',
    'Wednesday',
    'Thursday',
    'Friday'
];

// this is not optimal approach 
//const mon = weekdays[0],tue = weekday[1], fri = weekdays[4];


// few approach called destructuring
//here sat= 'saturday'  is default value implementation
const [mon, tue, , ,fri,sat='saturday'] = weekdays;

console.log(mon,tue,fri,sat);
