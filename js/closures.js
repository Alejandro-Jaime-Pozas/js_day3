// console.log('hello from closures.html')

/*
    JavaScript Closures
*/

// let subject = 'JavaScript'; // block scoped variable - window

// function homework(student){
//     console.log(`${student} did you finish your ${subject} homework?`)
// };

// homework('Brian'); // this does work, js can get subject from main code and input to specific fn

// console.log(student); // ReferenceError: sutdent is not defined


// Scopes can be nested

// let hometown = 'Chicago'; // Block scoped

// {
//     var state = 'Illinois'; // Globally scoped; if you change to let state, will throw error
//     let hometown = 'Champaign'; // Block scoped
// }

// console.log(`I am from ${hometown}, ${state}`)



// // Function scopes can also be nested

// function outer(){
//     let outerMessage = "This is the outer message";
//     function inner(){
//         let innerMessage = "This is the inner message";
//         console.log(outerMessage + innerMessage);
//     }

//     inner();
//     console.log(innerMessage); // ReferenceError: innerMessage is not defined bc you cannot go from inner to outer scope
// }

// console.log(outer);

// outer();


// Return a fn from a fn

function outer(){
    let outerMessage = 'This is the outer message';
    function inner(){
        let innerMessage = ' and this is the inner message';
        console.log(outerMessage + innerMessage);
    }
    return inner
}

console.log(outer);

let outerReturn = outer(); // return value of the outer fn

console.log(outerReturn);

outerReturn();

// inner() fn is a closure
// a closure is a fn that preserves the outer scope in its inner scope


// a more practical example

function makeMultiplier(x){
    function times(y){
        return x * y
    }
    return times
}

// create multiplier

let double = makeMultiplier(2); // this sets x to 2, and double becomes the inner part of makeMultiplier fn, incluiding 'times' fn and return stmt
console.log(double);

console.log(double(2));
console.log(double(3));
console.log(double(4));

let triple = makeMultiplier(3);
console.log(triple);

console.log(triple(2));
console.log(triple(3));
console.log(triple(4));


//  setting up a hidden variable useing closures

function setCounter(){
    console.log('Setting counter...')
    let count = 0; // scoped to setCounter fn
    function increaseCount(){
        count++
        return count
    }
    return increaseCount // by returning this, you SAVE the outer scope
};

let step = setCounter();

console.log(step);

console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());

// console.log(count); // ReferenceError: count is not defined



// another practical example = hiding variables

// let cache = {}

// function fib(num){
//     if (num < 2){
//         return num
//     } else if (num in cache){
//         return cache[num]
//     } else {
//         let fibNum = fib(num - 1) + fib(num - 2);
//         cache[num] = fibNum
//         return fibNum
//     }
// }

// console.log(fib(27))


function makeFibWithCache(){
    let cache = {}
    
    function fib(num){
        if (num < 2){
            return num
        } else if (num in cache){
            return cache[num]
        } else {
            let fibNum = fib(num - 1) + fib(num - 2);
            cache.num = fibNum
            return fibNum
        }
    }
    return fib
}

let fib = makeFibWithCache();

console.log(fib(10));




// IIFE - immediately invoked fn expression
// syntax - (function to define)(any args)

let myFullName = (function formatName(first, last){
    return [first, last].join(' ')
}) ('Brian', 'Stanton');

console.log(myFullName);

// set up closure w an IIFE

// let stepByFive = (step => {
//     let count = 0;
//     function inner(){
//         count += step;

//     }
// })



// in class exercise
// create an IIFE that has a hidden array adn returns a list that adds a new name each time fn is called

// let addName = (function addUser(){
//     var xlist = [];
//     function inner(name){
//         xlist.push(name)
//         return xlist
//     }
//     return inner 
// })(addName('Brian', "Tatyana"))