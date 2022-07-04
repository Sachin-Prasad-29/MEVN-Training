sum (12,13,function(result1){
    console.log('result1 = ',result1);
    sum(result1,14,function(result2){
        console.log('result2 = ',result2);
        sum(result2,15,function(result3){
            console.log('result3 = ',result3);
        })
    })
});




Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Sachin-Prasad-29 
puranik3
/
fynd-fsd-jun-13-2022
Private
Code
Issues
Pull requests
3
Actions
Projects
Wiki
Security
Insights
fynd-fsd-jun-13-2022/demos/03-js/06-event-loop/11-promise.js /
@puranik3
puranik3 promise pattern
Latest commit ed34769 17 minutes ago
 History
 1 contributor
31 lines (28 sloc)  990 Bytes

// alternative to callback pattern
// ES2015 class called "Promise"
function sum( x, y ) {
    return new Promise(( resolve, reject ) => {
        setTimeout(
            () => {
                if( typeof x !== 'number' || typeof y !== 'number' ) {
                    reject( new Error( 'both arguments must be number' ) );
                    return;
                }

                // we convey the result to the Promise object by calling resolve and passing it the result
                resolve( x + y );
            },
            3000
        );
    });
}

// promise object has 2 methods - then(), catch()
// promise is returned immediately - then(), catch() are called immediately
// Hey promise object! Whenever you get the result please call this function
sum( 12, 'hello' )
    .then( result => { // f - called on resolve
        console.log( 'result = ', result );
    })
    .catch( error => {
        console.log( error.message );
    });


// alternative to callback pattern
// ES2015 class called "Promise"
function sum( x, y ) {
    return new Promise(( resolve, reject ) => {
        setTimeout(
            () => {
                if( typeof x !== 'number' || typeof y !== 'number' ) {
                    reject( new Error( 'both arguments must be number' ) );
                    return;
                }

                // we convey the result to the Promise object by calling resolve and passing it the result
                resolve( x + y );
            },
            3000
        );
    });
}

// promise object has 2 methods - then(), catch()
// promise is returned immediately - then(), catch() are called immediately
// Hey promise object! Whenever you get the result please call this function
sum( 12, 'hello' )
    .then( result => { // f - called on resolve
        console.log( 'result = ', result );
    })
    .catch( error => {
        console.log( error.message );
    });

console.log( 'end of script' );






function sum( x, y ) {
    return new Promise(( resolve, reject ) => {
        setTimeout(
            () => {
                if( typeof x !== 'number' || typeof y !== 'number' ) {
                    reject( new Error( 'both arguments must be number' ) );
                    return;
                }

                resolve( x + y );
            },
            3000
        );
    });
}

sum( 12, 13 )
    .then( result1 => {
        console.log( 'result1 = ', result1 );
        return sum( result1, 14 );
  
    })
    .then( result2 => {
        console.log( 'result2 = ', result2 );
        return sum(result2,15)
    })
    .then( result3 => {
        console.log( 'result3 = ', result3 );
    })
    .catch( error => {
        console.log( error.message );
    });